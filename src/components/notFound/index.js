import React, { Fragment } from 'react'
import BottomBar from '../../components/bottomBar/'
import styles from './index.scss'

const NotFound = props => {
  const { staticContext } = props
  return (
    <Fragment>
      <div className="not-found">404页面</div>
      <BottomBar staticContext={staticContext} />
    </Fragment>
  )
}

export default NotFound
