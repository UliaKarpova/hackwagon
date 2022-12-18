import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Route, Switch, NavLink } from 'react-router-dom';
/*import { CurrentUserContext } from '../../contexts/CurrentUserContext';*/

import './App.css';

import { auth, getUserInfo} from '../../utils/AuthApi';
import { getProducts, putProducts, deleteProduct } from '../../utils/MainApi';

import Table from '../Table/Table';
import StartPage from '../Pages/StartPage/StartPage';
import Login from '../Pages/Login/Login';
import SnowFall from '../Snowfall/SnowFall';
import Header from '../Header/Header';
import WorkPage from '../Pages/WorkPage/WorkPage';

function App() {
	const history = useHistory();
	
	const [currentUser, setCurrentUser] = useState({});
	const [products, setProducts] = useState([]);

	function handleSubmit (values) {
		auth({
			phone: values.phone,
			password: values.password,
			refreshToken: '',
			grantType: 'PASSWORD'
		}).then((res) => {
			Promise.all([
				getUserInfo(),
				getProducts()
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
				setProducts(arr);
			}).catch((err) => console.log(err));

		}).then((res) => {
		history.push('/workpage');
		}).catch((err) => console.log(err));
  	}

	function saveEdit (data) {
		putProducts(data)
		.catch((err) => console.log(err));
	}

	function removeProduct (id) {
		deleteProduct(id)
			.then((res) => {
			const newProducts = products.filter((item) => item.id !== id);
			setProducts(newProducts);
			}).catch((err) => console.log(err));
	}
  	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Header />
					<SnowFall />
					<StartPage />
				</Route>
				<Route path="/signin">
					<Header>
						<NavLink to="/">
							<button className="header__btn">Назад</button>
						</NavLink>
					</Header>
					<Login handleSubmit={handleSubmit} />
				</Route>
				<Route path="/workpage">
					<Header>
						<NavLink to="/">
							<button className="header__btn">Выйти</button>
						</NavLink>
					</Header>
					<WorkPage data={products} />
				</Route>
				<Route path='/table'>
					<Table deleteProduct={removeProduct} 
					saveEdit={saveEdit} 
					data={products} />
				</Route>
			</Switch> 
		</div>
	);
}

export default App;