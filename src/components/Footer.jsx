import React from 'react'
import styles from "../components/styles.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Copyright © Your Website {new Date().getFullYear()}</p>
      <p>Privacy Policy · Terms & Conditions</p>
    </div>
  )
}

export default Footer