import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <div>
         <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} CodingBeast. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer