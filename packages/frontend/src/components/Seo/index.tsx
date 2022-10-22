import Head from 'next/head'
import React from 'react'

interface MetaData {
  pageTitle?: string
  pageDescription?: string
  image?: string
}

const Seo: React.FC<MetaData> = ({
  pageTitle,
  pageDescription,
  image,
}) => {
  const defaultTitle = 'オタクの履歴書'
  const defaultDescription = 'オタク自ら聖地を作ってこう！'

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription ? pageDescription : defaultDescription
  const imgUrl = image

  return (
    <Head>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={description} key="description"/>
      <meta property="og:title" content={title} key="og_title"/>
      <meta property="og:site_name" content={title} key="og_site_title"/>
      <meta property="og:description" content={description} key="og_desc"/>
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} key="og_image" />
      <meta property="og:url" content="https://ota-resume.vercel.app" key="og_url" />
      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} key="twitter_title"/>
      <meta name="twitter:description" content={description} key="twitter_desc"/>
      {/* <meta name="twitter:image:src" content="画像URL（絶対パス）" /> */}
    </Head>
  )
}

export default Seo
