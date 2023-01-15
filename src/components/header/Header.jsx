import React from 'react'
import './Header.scss'
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import heart from '../../assets/images/heart.svg';
import user from '../../assets/images/user.svg';
import shopping from '../../assets/images/shopping.svg';

function Header() {
  return (
    <div className='header'>
      <div className='container df_header'>
        <div className="left">
          <div className="logo">
            <Link to='/'><img src={logo} alt="copper logo" /></Link>
          </div>
          <nav className='nav__list'>
            <ul>
              <li><Link to="/catalog">Каталог</Link></li>
              <li><Link to="/news">Новости</Link></li>
              <li>Доставка</li>
              <li><Link to="/about">О нас</Link></li>
              <li>Контакты</li>
            </ul>
          </nav>
        </div>

        <nav>
          <ul className='shop__btns '>
            <li className='heart'><Link><img src={heart} alt="" /></Link></li>
            <li className='heart1'><Link><img src={user} alt="" /></Link></li>
            <li className='heart2'><Link><img src={shopping} alt="" /></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;