import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Password do not match');
    } else {
      console.log('SUCCESS');
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Регистрация</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Создать новый аккаунт
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Имя пользователя'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Электронная почта'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <small className='form-text'>
            Этот сайт использует Gravatar поэтому если Вам нужно изменить
            изображение профиля, используйте электронную почту Gravatar
          </small>
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
        <div className='form-group'>
          <input
            type='password'
            placeholder='Повторите пароль'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
            minLength='6'
          />
        </div>
        <input
          type='submit'
          className='btn btn-primary'
          value='Зарегистрироваться'
        />
      </form>
      <p className='my-1'>
        У Вас уже есть аккаунт? <Link to='/login'>Войти</Link>
      </p>
    </Fragment>
  );
};

export default Register;
