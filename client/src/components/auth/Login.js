import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('SUCCESS');
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Войти</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Войти в свой аккаунт
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Электронная почта'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Введите пароль'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='6'
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Войти' />
      </form>
      <p className='my-1'>
        У Вас нет аккаунта? <Link to='/register'>Зарегистрироваться</Link>
      </p>
    </Fragment>
  );
};

export default Login;
