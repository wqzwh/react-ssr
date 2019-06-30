import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BottomBar from '../../components/bottomBar/'
import Header from './header/'
import Category from '../../components/category/'
import ContentList from '../../components/contentList'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Category />
        <ContentList />
        <BottomBar />
      </Fragment>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func
}
export default connect(state => {
  return {}
})(Home)
