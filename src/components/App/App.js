import { useState } from 'react';
import './App.css';
import FormWithValidation from '../FormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { auth, getUserInfo, getUsers } from '../../utils/AuthApi';
import StartPage from '../StartPage/StartPage';

function App() {
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
    <div className="App">
      <StartPage />
      <form className='form' onSubmit={onSubmit}>
        <h2 className='form__title'>Авторизация</h2>
        <label htmlFor='phone' className='form__label'>Телефон</label>
        <input id='phone' onChange={onChange} name='phone' className='form__phone' type='tel' />
        <label htmlFor='password' className='form__label'>Пароль</label>
        <input id='password' onChange={onChange} name='password' className='form__password' type='password' />
        <button type='submit' className='form__button'>Отправить</button>
      </form>
    </div>
  );
}

export default App;