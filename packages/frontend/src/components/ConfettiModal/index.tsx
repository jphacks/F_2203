import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import styles from "./style.module.css"

type IConfettiModal = {
  userName: string,
  userCustmoId: string,
  artistName: string,
  artistImage: string,
  isOpen: boolean
  closeModal: () => void
}

const ConfettiModal: React.FC<IConfettiModal> = ({userName, userCustmoId, artistName, artistImage, isOpen, closeModal}) => {
  const { width, height } = useWindowSize()

  let hostname = ``
  if (typeof window !== 'undefined') {
    hostname = window.location.hostname;
 }

  return (
    <>
      {isOpen &&
        <Confetti
          width={width}
          height={height}
        numberOfPieces={150}
        gravity={0.05}
        />
      }
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className={styles["animate-charcter"]}
                  >
                    Congratulations!!🎉
                  </Dialog.Title>
                  <div className='w-36 rounded mx-auto text-center mt-8'>
                    <img src={artistImage} className={styles.animation_card} />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      {userName}さんと{artistName}さんとの履歴が追加されました！！やったね！!
                    </p>
                  </div>

                  <div className="mt-4 justify-between flex mx-0">
                    <a
                      href={`http://twitter.com/share?url=${hostname}/${userCustmoId}&text=${artistName}との初めての履歴を追加したよ！`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Twitterでシェアする
                    </a>
                    <button
                      type="button"
                      className="rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-black-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      ありがとう。閉じる
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default React.memo(ConfettiModal)
