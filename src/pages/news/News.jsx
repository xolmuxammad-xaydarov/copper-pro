import React, { useContext, useEffect, useState } from 'react'
import { maslo } from '../../components/data/maslo'
import './News.scss'
import Next from '../../assets/images/next.png'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Context } from '../../components/Context/Context'

function News() {
    const [stat, setStat] = useState(1)

    return (
        <>
            <div className='header__news container'>
                <div className="container">
                    <div className="news__inner">
                        <h3>Главная / <strong>Новости</strong></h3>
                        <h4>Новости</h4>
                        <ul>
                            {
                                maslo?.map((e, i) => (
                                    <li key={i}>
                                        <img src={e.img} alt="" />
                                        <h4>{e.name}</h4>
                                        <p>{e.title}</p>
                                        <h6>
                                            <Link to='/news-inside'>
                                                {e.link}
                                            </Link>
                                        </h6>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="pages">
                        <ul className='page__ul'>
                            <li onClick={() => stat > 1 ? setStat(stat - 1) : setStat(4)}><img src={Next} alt="" /></li>
                            <ul>
                                <li className={stat == '1' ? 'active' : ''} onClick={(e) => setStat(e.target.id)} id='1' >1</li>
                                <li className={stat == '2' ? 'active' : ''} onClick={(e) => setStat(e.target.id)} id='2'>2</li>
                                <li className={stat == '3' ? 'active' : ''} onClick={(e) => setStat(e.target.id)} id='3'>3</li>
                                <li className={stat == '4' ? 'active' : ''} onClick={(e) => setStat(e.target.id)} id='4'>4</li>
                            </ul>
                            <li onClick={() => stat < 4 ? setStat(stat + 1) : setStat(1)} className='next'><img src={Next} alt="" /></li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News