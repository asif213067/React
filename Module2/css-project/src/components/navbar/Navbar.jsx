// import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <h1>This is a Navbar</h1>
        <button className={styles.btn}>Log in</button>
    </div>
  )
}

export default Navbar