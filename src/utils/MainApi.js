const BASE_URL = 'http://localhost:8080';
const jwt = localStorage.getItem('token');

const getResponseData = (res) => {
	if (res.ok) {
		return res.json();
	} else {
		return res.json()
			.then((data) => {
				return Promise.reject(data.validation?.body.message || data.message);
			})
	}
}

export const getProducts = () => {
    return fetch(`${BASE_URL}/products`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
    }).then(getResponseData)
    .catch((err) => {
        return typeof err !== 'string' ? Promise.reject('Ошибка подключения') : Promise.reject(err);
    })
}

export const putProducts = ({ id, name, number, year, factory, comment }) => {
	return fetch(`${BASE_URL}/products/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${jwt}`,
		},
		body: JSON.stringify({name, number, year, factory, comment })
	}).then(getResponseData)
	.catch((err) => {
		return typeof err !== 'string' ? Promise.reject('Ошибка подключения') : Promise.reject(err);
	})
}

export const deleteProduct = (id) => {
	return fetch(`${BASE_URL}/products/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${jwt}`,
		},
		body: JSON.stringify(id)
	}).then((res) => console.log(res))
	.catch((err) => {
		return typeof err !== 'string' ? Promise.reject('Ошибка подключения') : Promise.reject(err);
	})
}
