import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import AsyncSelect from 'react-select/async'
import { ActionMeta, SingleValue } from 'react-select/dist/declarations/src/types'
import styles from '../styles/New.module.css'
import { GetArtistsApiResponse } from './api/artists'
import ConfettiModal from '@/components/ConfettiModal'
import Loading from '@/components/Loading'
import { SearchBox } from '@/components/SearchBox'
import Seo from '@/components/Seo';
import { useAuthUser } from '@/hooks/useAuth'
import { useQueryUser } from '@/hooks/useUser'
import fetcher from '@/lib/fetcher'
import { createHasuraClient } from '@/lib/hasuraClient'
import postUseCase from '@/useCases/postUseCase'

type FormValues = {
  title: string
  desc: string
  location_name: string
  location_lat: number
  location_lng: number
  link: string
  artist: string
}

const New: NextPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>()
  const location_name = watch('location_name')

  const router = useRouter()
  const user = useAuthUser()
  const hasuraClient = createHasuraClient(null)

  const useCase = new postUseCase()

  const { data: userData } = useQueryUser(user?.uid ?? '')

  useEffect(() => {
    if (user === null || user.isAnonymous) {
      router.push('/login')
    }
  }, [user, router])

  useEffect(() => {
    register('location_name', { required: '場所を入力してください' })
    register('location_lat', { required: true, min: -90, max: 90 })
    register('location_lng', { required: true, min: -180, max: 180 })
  }, [register])

  const [artistId, setArtist] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [artistName, setArtistName] = useState('')
  const [artistImage, setArtistImage] = useState('')

  const closeModal = () => {
    setIsModalOpen(false)
    if (userData?.user?.custom_id) {
      router.push(`/profile/${userData?.user?.custom_id}`)
    }
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    toast.loading('ちょっと待ってね...✋🏻')
    try {
      setIsLoading(true)
      const artist = await useCase.getArtistInfo(artistId ?? '')
      await useCase.insertItem(
        user?.uid as string,
        data.title,
        data.desc,
        data.location_name,
        data.location_lat,
        data.location_lng,
        data.link,
        artist.id,
        artist.name,
        artist.images[2].url,
      )

      setArtistName(artist.name)
      setArtistImage(artist.images[2].url)
      toast.dismiss()
      toast.success('履歴を追加しました!🎉')
      setIsLoading(false)
      setIsModalOpen(true)
    } catch (e) {
      toast.dismiss()
      console.error(e)
      toast.error('Something is wrong!🥺')
      setIsLoading(false)
    }
  }

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
      <Seo pageTitle='投稿'/>
      <Toaster />
      <ConfettiModal
        userName={userData?.user?.name ?? ''}
        userCustmoId={userData?.user?.custom_id ?? ''}
        artistImage={artistImage}
        artistName={artistName}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
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
                  placeholder='タイトル(必須)'
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
                  placeholder='一言日記'
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
                  placeholder={'アーティスト名 🎤(必須)'}
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
                <SearchBox
                  onSelectAddress={(location_name, location_lat, location_lng) => {
                    setValue('location_name', location_name)
                    location_lat ? setValue('location_lat', location_lat) : undefined
                    location_lng ? setValue('location_lng', location_lng) : undefined
                  }}
                  defaultValue=''
                />
                {errors.location_name && (
                  <p className='text-xs text-red-600'>{errors.location_name.message}</p>
                )}
              </div>
              {/* <div className='mb-6 items-center'>
                <input
                  id='link'
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5'
                  placeholder='URL 🔗'
                  {...register('link')}
                />
                {errors?.link && <p className='text-xs text-red-600'>{errors.link.message}</p>}
              </div> */}
              <div className='text-center'>
                <button type='submit' className={styles.button} disabled={isLoading}>
                  <span>この内容で記録する</span>
                  <span>✨</span>
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
