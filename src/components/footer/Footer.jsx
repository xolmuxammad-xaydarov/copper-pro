import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../assets/images/logo.png';
import twitter from '../../assets/images/twitter.svg';
import face from '../../assets/images/Icon_11_.svg';
import inst from '../../assets/images/Group 83.svg';

function Footer() {
  return (
    <div className='footer'>
      <div className="container footer__df">
        <div className='footer__left'>
          <Link to='/'><img src={logo} alt="" /></Link>
          <p>© 2021 “Copper Pro” <br/>Все права защищенны</p>
          <a href="/">Политика конфиденциальности</a>
        </div>
        <div className='footer__right'>
          <ul>
            <b>Навигация</b>
            <li>Каталог</li>
            <li>Новости</li>
            <li>Доставка</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
          <ul className='catalog__list_f'>
            <b>Каталог</b>
            <li>Для эфирных масел</li>
            <li>Для гидролатов</li>
            <li>Медная посуда</li>
            <li>Аксессуары из меди</li>
            <li>Индивидуальный заказ</li>
            <li>Скидки и предложения</li>
          </ul>
          <ul>
            <b>Контакты</b>
            <li>Бажана 8-Б, Киев, 02132 Украина</li>
            <li>+38 (096) 990 67 56</li>
            <li>a.alambik@gmail.com</li>
            <div className='social_m'>
              <img src={twitter} alt="" /><img src={face} alt="" /><img src={inst} alt="" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;