import React, { Component } from 'react'
export default (CustomizeComponent, styles) => {
  return class NewComponent extends Component {
    componentWillMount() {
      const { staticContext } = this.props
      if (staticContext) {
        staticContext.css.push(styles._getCss())
      }
    }
    render() {
      return <CustomizeComponent {...this.props} />
    }
  }
}
