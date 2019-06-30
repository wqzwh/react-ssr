import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import InjectionStyle from '../../components-hoc/injectionStyle'
import styles from './index.scss'

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
      starDom.push(
        <div
          key={i + 'full'}
          className={classnames(styles['star'], styles['fullstar'])}
        />
      )
    }

    // 渲染满星dom
    if (halfstar) {
      for (let j = 0; j < halfstar; j++) {
        starDom.push(
          <div
            key={j + 'half'}
            className={classnames(styles['star'], styles['halfstar'])}
          />
        )
      }
    }

    // 渲染0星dom
    if (nullstar) {
      for (let k = 0; k < nullstar; k++) {
        starDom.push(
          <div
            key={k + 'null'}
            className={classnames(styles['star'], styles['nullstar'])}
          />
        )
      }
    }

    return starDom
  }

  return <div className={styles['star-score']}>{renderScore()}</div>
}

StarScore.propTypes = {
  score: PropTypes.number
}

export default InjectionStyle(StarScore, styles)
