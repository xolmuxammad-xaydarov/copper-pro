import React from 'react'
import './Clients.scss'

function Clients() {
  return (
    <div>
      <div className="clients containerM">
        <div className="clients-div">
          <div className="clients-div-left">
            <b>Наши клиенты</b>
            <p>Мы требовательны к себе, чтобы каждый день становится лучше для наших клиентов и находить лучшие решения для каждого из них</p>
          </div>
          <div className="clients-div-right">
            <b>Счетчик клиентов</b>
            <p>12 346</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients