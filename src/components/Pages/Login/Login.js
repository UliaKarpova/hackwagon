import './Login.css';
import FormWithValidation from '../../FormWithValidation';

function Login({ handleSubmit }) {
	const { values, handleChange, resetForm } = FormWithValidation();

	function onChange(event) {
		handleChange(event);
	}

	function onSubmit(event) {
		event.preventDefault();
		handleSubmit(values);
		resetForm();
	}

	return (
		<div className="login__container">
			<form className='form__login' 
			onSubmit={onSubmit}>
				<h2 className='form__title'>Авторизация</h2>

				<label htmlFor='phone' 
				className='form__label'>Телефон</label>
				<input id='phone' 
				onChange={onChange} 
				name='phone' 
				className='form-input form__phone' 
				type='tel' />

				<label htmlFor='password' 
				className='form__label'>Пароль</label>
				<input id='password' 
				onChange={onChange} 
				name='password' 
				className='form-input form__password' 
				type='password' />

				<button type='submit' 
				className="page__btn">Войти</button>
			</form>
		</div>
	);
}

export default Login;