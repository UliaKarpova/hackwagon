import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import FormWithValidation from '../../FormWithValidation';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { auth, getUserInfo, getUsers } from '../../../utils/AuthApi';

function Register() {
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);

  const { values, handleChange, errors, isValid, resetForm } = FormWithValidation();
  console.log(currentUser);
  console.log(allUsers);


  function onChange(event) {
    handleChange(event);
  }

  function onSubmit(event) {
    event.preventDefault();
    auth({
      phone: values.phone,
      password: values.password,
      refreshToken: '',
      grantType: 'PASSWORD'
    }).then((res) => {
      console.log(res);
    }).then((res) => {
      Promise.all([
        getUserInfo(),
        getUsers()
      ])
      .then(([data, arr]) => {
        setCurrentUser({
          firstName: data.firstName,
          id: data.id,
          patronymic: data.patronymic,
          phone: data.phone,
          role: data.role,
          surname: data.surname
        });
        setAllUsers(arr);
      });
    }).catch((err) => console.log(err));
    resetForm();
  }

  return (
    <div className="reg__container">
      <form className='form-reg' onSubmit={onSubmit}>
        <h2 className='form-reg__title'>Регистрация</h2>
        <label htmlFor='phone' className='form-reg__label'>Телефон</label>
        <input id='phone' onChange={onChange} name='phone' className='form-reg__input form__phone' type='tel' />
        <label htmlFor='password' className='form-reg__label'>Пароль</label>
        <input id='password' onChange={onChange} name='password' className='form-reg__input form__password' type='password' />
        <button type='submit' className='form-reg__btn'>Отправить</button>
      </form>
      <div className="redirect__container">
        <p className="form-reg__text">Уже зарегистрированы?</p>
        <Link to="/signin" className="link__to">Войти</Link>
      </div>
    </div>
  );
}

export default Register