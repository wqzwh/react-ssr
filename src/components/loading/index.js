import React from 'react'
import styles from './index.scss'

const LoadingComponent = () => {
  return (
    <div className={styles.ske}>
      <div className={styles.spinning}>
        <div className={styles['loading-text']}>数据加载</div>
      </div>
    </div>
  )
}

export default LoadingComponent
