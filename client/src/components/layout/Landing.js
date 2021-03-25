import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Developer Connector</h1>
          <p className='lead'>
            Зарегистрируйтесь в первой социальной сети для разработчиков
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Зарегистрироваться
            </Link>
            <Link to='/login' className='btn btn-light'>
              Войти
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;