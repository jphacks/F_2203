import { GetUserByCustomIdQuery } from '@/generated/graphql'
import { createHasuraClient } from '@/lib/hasuraClient'
import { getProfileImagePath, uploadFile } from '@/utils/uploadFile'
import { Dialog, Transition } from '@headlessui/react'
import loadImage from 'blueimp-load-image'
import { useRouter } from 'next/router'
import React, { ChangeEvent, Fragment, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type IConfettiModal = {
    user: GetUserByCustomIdQuery['users'][0]
    isOpen: boolean
    closeModal: () => void
}

type FormValues = {
    name: string
    name_id: string
    bio: string
    avatarImg: File
}

const ProfileEditModal: React.FC<IConfettiModal> = ({
    user,
    isOpen,
    closeModal,
}) => {
    const [preview, setPreview] = useState('')
    const [fileName, setFileName] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const hasuraClient = createHasuraClient(null)
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<FormValues>()
    let hostname = ``
    if (typeof window !== 'undefined') {
        hostname = window.location.hostname
    }

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            setIsLoading(true)
            //custom_id重複チェック
            const customIds = await hasuraClient.GetUserByCustomId({ customId: data.name_id })
            if (data.name_id != user.custom_id && customIds.users.length > 0) {
                setError('name_id', { message: 'このユーザーIDは既に登録されています。' })
                setIsLoading(false)
                return
            }
            //画像アップロード
            let url = user.avatar_url
            if (preview) {
                url = await uploadImage()
            }
            // await hasuraClient.UpdateUser
            await hasuraClient.UpdateUser({ uid: user.uid, avatar_url: url, name: data.name, custom_id: data.name_id, bio: data.bio, updated_at: new Date() })
            router.push(`/profile/${data.name_id}`)
            // 完了したらモーダルを閉じる
            closeModal()
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
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModal}>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>

                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title as='h2' className="text-center">
                                    プロフィール編集
                                </Dialog.Title>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor='avatarImg'>
                                        <div className='text-center'>
                                            <div className='avatar cursor-pointer'>
                                                <div className='w-24 rounded'>
                                                    <img src={preview ? preview : user.avatar_url ? user.avatar_url : "/images/avatar.png"} />
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
                                            <p>{'アイコンを変更する'}</p>
                                        </div>
                                    </label>
                                    <div className='mb-6 items-center'>
                                        <input
                                            id='name'
                                            type='text'
                                            className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                                            placeholder='ユーザー名'
                                            {...register('name', {
                                                value: user?.name ?? "",
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
                                                value: user.custom_id ?? "",
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
                                    <p className='sub-text mb-6 text-sm'>
                                        半角英数字とアンダーバー（_）のみを使うことができます。
                                    </p>
                                    <div className='mb-6 flex-row'>
                                        <textarea
                                            id='bio'
                                            className='bg-gray-50 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                                            placeholder='自己紹介'
                                            rows={4}
                                            {...register('bio', {
                                                value: user.bio ?? ""
                                            })}
                                        />
                                    </div>
                                    <div className="flex justify-center" >
                                        <div className='' style={{ position: "absolute", left: 0, paddingLeft: "1.6rem" }} >
                                            <button
                                                type='submit'
                                                className='text-red-600 hover:bg-red-600 focus:ring-1 focus:outline-none focus:ring-red-600 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center'
                                                style={{ backgroundColor: 'white' }}
                                                disabled={isLoading}
                                            >
                                                キャンセル
                                            </button>
                                        </div>
                                        <div className='text-center'>
                                            <button
                                                type='submit'
                                                className='text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center'
                                                style={{ backgroundColor: '#0162b9' }}
                                                disabled={isLoading}
                                            >
                                                変更
                                            </button>
                                        </div>
                                    </div>
                                </form>


                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default React.memo(ProfileEditModal)
