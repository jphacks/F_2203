import Link from 'next/link'
import React from 'react'
import { auth } from '@/lib/firebase'

const Header = () => {
  const isLoggedIn = auth.currentUser != null

  return (
    <div className='navbar bg-white'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl text-gray-800'>HogeHoge</a>
      </div>
      {isLoggedIn ? (
        <div className='flex-none'>
          {/* <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img src='https://placeimg.com/80/80/people' />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a className='justify-between'>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
          <div className='dropdown dropdown-end'>
            <Link href='/new'>
              <a className='text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm sm:w-auto px-5 py-2.5 text-center'>
                + New
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className='navbar-end mr-4'>
          <Link href='/login'>
            <a className='bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-sm sm:w-auto px-5 py-2.5 text-center text-white'>
              ログイン
            </a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default React.memo(Header)
