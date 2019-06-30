import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BottomBar from '../../components/bottomBar/'
import Header from './header/'
import Category from '../../components/category/'
import ContentList from '../../components/contentList'
import { getInitData } from '../../store/home/sagas'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { staticContext } = this.props
    return (
      <Fragment>
        <Header staticContext={staticContext} />
        <Category staticContext={staticContext} />
        <ContentList staticContext={staticContext} />
        <BottomBar staticContext={staticContext} />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGetInitData() {
    dispatch({ type: 'HOME_INITDATA_SAGA' })
  }
})

Home.propTypes = {
  dispatch: PropTypes.func
}

const ExportHome = connect(
  null,
  mapDispatchToProps
)(Home)

ExportHome.loadData = () => {
  return getInitData()
}

export default ExportHome
