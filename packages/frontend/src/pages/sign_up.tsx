import loadImage from 'blueimp-load-image'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import styles from '../styles/SignUp.module.css'
import { useAuthUser } from '@/hooks/useAuth'
import { createHasuraClient } from '@/lib/hasuraClient'
import { signUpUseCase } from '@/useCases'
import { getProfileImagePath, uploadFile } from '@/utils/uploadFile'

type FormValues = {
  name: string
  name_id: string
  bio: string
  avatarImg: File
}

const SignUp: NextPage = () => {
  const [preview, setPreview] = useState('')
  const [fileName, setFileName] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()
  const user = useAuthUser()
  const hasuraClient = createHasuraClient(null)

  useEffect(() => {
    const data = async () => {
      if (user === null || user.isAnonymous) {
        router.push('/login')
      } else {
        const uid = user.uid
        const data = await hasuraClient.getUserByUid({ uid: uid })
        if (data.user != null) {
          //登録済みユーザーの場合
          router.push(`/profile/${data.user?.custom_id}`)
        }
      }
    }
    data()
  }, [user, router])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsLoading(true)
      toast.loading('処理中...ちょっと待ってね...✋🏻')
      //custom_id重複チェック
      const customIds = await hasuraClient.GetUserByCustomId({ customId: data.name_id })
      if (customIds.users.length > 0) {
        setError('name_id', { message: 'このユーザーIDは既に登録されています。' })
        toast.dismiss()
        setIsLoading(false)
        return
      }
      //画像アップロード
      const url = await uploadImage()

      //ユーザー登録
      await signUpUseCase.createUser(user?.uid as string, data.name, data.name_id, data.bio, url)
      toast.dismiss()
      setIsLoading(false)
      toast.success('ユーザー登録登録が完了しました!🎉')
      //完了したら/profile/:idページへ遷移させる
      router.push(`/profile/${data.name_id}`)
    } catch (e) {
      toast.dismiss()
      setIsLoading(false)
      toast.error(`ユーザー登録登録に失敗しました😥 もう一度試してみてください`)
    }
  }

  // Upload image function
  const uploadImage = async () => {
    if (!user?.uid || preview.length === 0) return "";
    const canvas = await loadImage(preview, {
      maxWidth: 500,
      canvas: true
    })

    //@ts-ignore
    const blob = await new Promise(resolve => canvas.image.toBlob(resolve)) as Blob;
    const result = await uploadFile(getProfileImagePath(user.uid), blob)
    return result
    // toast.promise(, {
    //     loading: 'Uploading...',
    //     success: '画像のアップロードに成功しました!🎉',
    //     error: `画像のアップロードに失敗しました😥 もう一度試してみてください`,
    // })
  }

  //ローカルから画像を追加する
  const handeChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (event.target.files == null) {
      return
    }
    const file = event.target.files[0]
    if (file == null) {
      return
    }

    setPreview(window.URL.createObjectURL(file))
    setFileName(file.name)
  }

  return (
    <div className={styles.container}>
      <Toaster />
      <main className='mx-auto my-auto min-h-screen justify-center items-center flex'>
        <div>
          <h2 className='text-3xl mb-6 text-center'>新規作成</h2>
          <div className='px-12 py-10 bg-white rounded border-t-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='avatarImg'>
                <div className='text-center'>
                  <div className='avatar cursor-pointer'>
                    <div className='w-24 rounded'>
                      <img src={preview ? preview : '/images/avatar.png'} />
                    </div>
                  </div>
                </div>
                <div className='text-center mb-6 cursor-pointer'>
                  <input
                    id='avatarImg'
                    type='file'
                    accept='image/png,image/jpeg'
                    name='avatarImg'
                    className='sr-only'
                    onChange={(e) => handeChangeFile(e)}
                  />
                  <p>{preview ? fileName : 'アイコンを変更する'}</p>
                </div>
              </label>
              <div className='mb-6 items-center'>
                <input
                  id='name'
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                  placeholder='ユーザー名'
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'ユーザー名を入力してください。',
                    },
                    maxLength: {
                      value: 20,
                      message: '20文字以内で入力してください。',
                    },
                  })}
                />
                {errors?.name && <p className='text-xs text-red-600'>{errors.name.message}</p>}
              </div>
              <div className='mb-1 flex flex-row items-center'>
                <div className='whitespace-nowrap'>https://hogehoge.com/</div>
                <input
                  id='name_id'
                  type='text'
                  className='ml-2 bg-gray-50 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                  placeholder='ユーザーId'
                  {...register('name_id', {
                    required: {
                      value: true,
                      message: 'ユーザーIdを入力してください。',
                    },
                    maxLength: {
                      value: 20,
                      message: '20文字以内で入力してください。',
                    },
                    pattern: {
                      value: /^[0-9A-Za-z\\_]+$/,
                      message: '半角英数字とアンダーバー（_）のみ入力してください。',
                    },
                  })}
                />
              </div>
              {errors?.name_id && <p className='text-xs text-red-600'>{errors.name_id.message}</p>}
              <div className='sub-text mb-6'>
                半角英数字とアンダーバー（_）のみを使うことができます。
              </div>
              <div className='mb-6 flex-row'>
                <textarea
                  id='bio'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                  placeholder='自己紹介'
                  rows={4}
                  {...register('bio')}
                />
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className='text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center'
                  style={{ backgroundColor: '#0162b9' }}
                  disabled={isLoading}
                >
                  はじめる
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignUp
