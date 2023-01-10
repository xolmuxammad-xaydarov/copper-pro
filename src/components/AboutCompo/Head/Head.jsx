import React from 'react'
import './Head.scss'

import signature from '../../../assets/images/signature.png'
import copper from '../../../assets/images/copper.png'
import { Link } from 'react-router-dom'

function Head() {
  return (
    <div>
        <div className="about containerM">
          <Link to='/'>Главная / <b>О нас</b></Link>
          <div className='about-div'>
            <div className="about-div-left">
              <h1>О нас</h1>
              <h3><sup>''</sup>Мы любим всё что сделано из меди<sub>,,</sub></h3>
              <div>
                <b>Иван Иванов</b>
                <img src={signature} alt="signature" />
              </div>
            </div>
            <div className="about-div-right">
              <img src={copper} alt="copperImg" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Head