import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BottomBar from '../../components/bottomBar/'
import Header from './header/'
import Category from '../../components/category/'
import ContentList from '../../components/contentList'
// 如果不用react-loadable 在此导入saga方法，否则移入路由配置文件
// import { getInitData } from '../../store/home/sagas'

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

// 如果不用react-loadable 在此定义loadData方法，否则移入路由配置文件
// ExportHome.loadData = serverConfig => {
//   const params = {
//     page: 1
//   }
//   return getInitData(serverConfig, params)
// }

export default ExportHome
