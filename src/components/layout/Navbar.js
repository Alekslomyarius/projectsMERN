import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <a href='!#'>Разработчики</a>
        </li>
        <li>
          <Link to='/register'>Зарегистрироваться</Link>
        </li>
        <li>
          <Link to='/login'>Войти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
