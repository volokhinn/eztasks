import React from 'react'
import styles from '../scss/app.module.scss'

export const Header = () => {
  return (
    <header className={styles.header} >
    <span className={`${styles.header} ${styles.header__title}`}>EZTASKS</span>
    <span className={`${styles.header} ${styles.header__subtitle}`}>version 1.0</span>
    </header>
  )
}

export default Header;