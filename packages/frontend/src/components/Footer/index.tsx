import Image from 'next/image'
import React from 'react'
import styles from './style.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>© 2022 優勝するドルオタ</p>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
