import React from 'react'
import './Wealth.scss'

import wealth from '../../../assets/images/wealth.png'
import rul from '../../../assets/images/rul.png'
import diamond from '../../../assets/images/diamond.png'
import fam from '../../../assets/images/fam.png'

function Wealth() {
  return (
    <div>
        <div className="wealth containerM">
          <div className="wealth-div">
            <div className='wealth-div-left'>
              <img src={wealth} alt="" />
            </div>
            <div className='wealth-div-right'>
              <h2>Наши ценности</h2>
              <p>Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нашем магазине.</p>
              <div>
                <img src={rul} alt="ruletka" />
                <b>Оперативность</b>
              </div>
              <div>
                <img src={diamond} alt="diamond" />
                <b className='line2'>Качественный товар и сервис</b>
              </div>
              <div>
                <img src={fam} alt="family" />
                <b>Гибкость</b>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Wealth
