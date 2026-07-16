// import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>This is a header</h1>
        <button className={styles.btn}>Banner Button</button>
        <h2 className={`${styles.secondTitle} ${styles.importantTitle}`}>Now i am learning React.js</h2>
    </div>
  )
}

export default Header