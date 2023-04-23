import React from 'react'
import styles from "./loading.module.css"

const Loading = () => {
  return (
    <div className={styles.loader}>
  <div className={styles.ball}></div>
</div>
  )
}

export default Loading