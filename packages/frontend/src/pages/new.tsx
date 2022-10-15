import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import AsyncSelect from 'react-select/async'
import { ActionMeta, SingleValue } from 'react-select/dist/declarations/src/types'
import styles from "../styles/New.module.css"
import { GetArtistsApiResponse } from './api/artists'
import fetcher from '@/lib/fetcher'

type FormValues = {
  title: string
  desc: string
  location: string
  link: string
  artist: string
}

const New: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data, artist)
  }

  const [artist, setArtist] = useState<string | undefined>()

  const handleInputChange = (
    newValue: SingleValue<GetArtistsApiResponse>,
    actionMeta: ActionMeta<GetArtistsApiResponse>,
  ) => {
    setArtist(newValue?.value)
  }

  const getArtists = (input: string): Promise<GetArtistsApiResponse[]> => {
    if (!input) {
      return Promise.resolve([])
    }

    return fetcher(`/api/artists?keyword=${input}`).then((res) => {
      return res?.artists ?? []
    })
  }

  return (
    <div className='bg-[#F0F5F9]'>
      <div className='my-auto min-h-screen justify-center items-center flex max-w-2xl mx-auto'>
        <div className='w-full mx-4'>
          <h2 className='text-xl mb-6 text-center'>新しい足跡を記録</h2>
          <div className='px-8 py-10 bg-white rounded border-t-4 border-t-blue-300 w-full'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-6 items-center'>
                <input
                  id='title'
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5'
                  placeholder='タイトル'
                  {...register('title', {
                    required: {
                      value: true,
                      message: 'タイトルを入力してください。',
                    },
                    maxLength: {
                      value: 20,
                      message: '20文字以内で入力してください。',
                    },
                  })}
                />
                {errors?.title && <p className='text-xs text-red-600'>{errors.title.message}</p>}
              </div>
              <div className='mb-6 flex-row'>
                <textarea
                  id='desc'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5'
                  placeholder='詳細'
                  rows={4}
                  {...register('desc')}
                />
              </div>
              <div className='mb-6'>
                <AsyncSelect
                  cacheOptions
                  loadOptions={getArtists}
                  defaultOptions
                  onChange={handleInputChange}
                  placeholder={'アーティスト名 🎤'}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                      ...theme.colors,
                      primary25: 'rgb(147 197 253)',
                      primary: 'rgb(59 130 246)',
                    },
                  })}
                  styles={{
                    singleValue: (base) => ({ ...base }),
                    valueContainer: (base) => ({
                      ...base,
                      background: `rgb(249 250 251)`,
                      borderTopLeftRadius: `0.375rem`,
                      borderBottomLeftRadius: `0.375rem`,
                      width: '100%',
                      fontSize: '0.8em',
                    }),
                    indicatorsContainer: (base) => ({
                      ...base,
                      background: `rgb(249 250 251)`,
                      borderTopRightRadius: `0.375rem`,
                      borderBottomRightRadius: `0.375rem`,
                    }),
                  }}
                />
              </div>
              <div className='mb-6 items-center'>
                <input
                  id='location'
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5'
                  placeholder='場所 📍'
                  {...register('location', {
                    maxLength: {
                      value: 20,
                      message: '20文字以内で入力してください。',
                    },
                  })}
                />
                {errors?.location && (
                  <p className='text-xs text-red-600'>{errors.location.message}</p>
                )}
              </div>
              <div className='mb-6 items-center'>
                <input
                  id='link'
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5'
                  placeholder='URL 🔗'
                  {...register('link')}
                />
                {errors?.link && <p className='text-xs text-red-600'>{errors.link.message}</p>}
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className={styles.button}
                >
                  <span>この内容で記録する</span><span>✨</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
