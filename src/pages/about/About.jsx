import React from 'react'
import './About.scss'


import Head from '../../components/AboutCompo/Head/Head'
import Clients from '../../components/AboutCompo/Clients/Clients';
import History from '../../components/AboutCompo/History/History';
import Map from '../../components/AboutCompo/Map/Map';
import Wealth from '../../components/AboutCompo/Wealth/Wealth';

function About() {
  return (
    <h1>
      <div className="bg">
        <div className='container'>
         <Head/>
        </div>
      </div>
        <div className='container'>
          <Clients/>
        </div>
        <div className="bgD">
          <div className="container">
           <History/>  
          </div>
        </div>
        <div className="bg">
          <Map/>
        </div>
        <Wealth/>
    </h1>
  )
}

export default About;