import { Controls, Player } from '@lottiefiles/react-lottie-player'
import Link from 'next/link'
import React from 'react'
import Spacer from '../Space'
import styles from './style.module.css'

const NoContent: React.FC = (props) => {
  return (
    <div>
      <div>
        <Player
          autoplay
          loop
          src='https://assets7.lottiefiles.com/packages/lf20_ZI1FDI.json'
          style={{ height: '300px', width: '300px' }}
        ></Player>
        <div className='text-center'>
          <p className='text-xl'>まだコンテンツが無いよ！</p>
          <p className='text-xl'>新しい履歴を追加してね！</p>

          <Spacer size={32} />

          <Link href='/new'>
            <a>
              <div className={styles.button}>
                <span>追加する</span>
                <span>✨</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(NoContent)
