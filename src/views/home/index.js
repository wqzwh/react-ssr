import React, { Fragment } from 'react'
import BottomBar from '../../components/bottomBar/'
import Header from './header/'
import Category from '../../components/category/'
import ContentList from '../../components/contentList'

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Category />
      <ContentList />
      <BottomBar />
    </Fragment>
  )
}

export default Home
