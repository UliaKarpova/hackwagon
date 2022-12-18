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

/*export const register = (data) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(getResponseData)
    .catch((err) => {
        return typeof err !== 'string' ? Promise.reject(connectionError) : Promise.reject(err);
    })
}*/

export const auth = (data) => {
    return fetch(`${BASE_URL}/auth/sign-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        }).then(getResponseData)
        .then((data) => {
            if (data.accessToken) {
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('refresh', data.refreshToken);
                return data;
            }
        }).catch((err) => {
            return typeof err !== 'string' ? Promise.reject("Ошибка подключения") : Promise.reject(err);
        })

}

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/auth/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
          },
    }).then(getResponseData)
    .catch((err) => {
        return typeof err !== 'string' ? Promise.reject('Ошибка подключения') : Promise.reject(err);
    })}

    /*export const getUsers = () => {
        return fetch(`${BASE_URL}/admin/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
              },
        }).then(getResponseData)
        .catch((err) => {
            return typeof err !== 'string' ? Promise.reject('Ошибка подключения') : Promise.reject(err);
        })}*/
