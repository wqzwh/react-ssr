import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const StarScore = props => {
  function renderScore() {
    const wm_poi_score = props.score || ''

    const score = wm_poi_score.toString()

    const scoreArray = score.split('.')

    // 满星个数
    const fullstar = parseInt(scoreArray[0])

    // 半星个数
    const halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0

    // 0星个数
    const nullstar = 5 - fullstar - halfstar

    const starDom = []

    // 渲染满星dom
    for (let i = 0; i < fullstar; i++) {
      starDom.push(<div key={i + 'full'} className="star fullstar" />)
    }

    // 渲染满星dom
    if (halfstar) {
      for (let j = 0; j < halfstar; j++) {
        starDom.push(<div key={j + 'half'} className="star halfstar" />)
      }
    }

    // 渲染0星dom
    if (nullstar) {
      for (let k = 0; k < nullstar; k++) {
        starDom.push(<div key={k + 'null'} className="star nullstar" />)
      }
    }

    return starDom
  }

  return <div className="star-score">{renderScore()}</div>
}

StarScore.propTypes = {
  score: PropTypes.number
}

export default StarScore
