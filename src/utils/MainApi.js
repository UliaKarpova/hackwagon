const BASE_URL = 'http://localhost:8080';
const jwt = localStorage.getItem('token');

const getResponseData = (res) => {
    console.log(res);
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
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrNzc3Nzc3Nzc3NzciLCJ1c2VySWQiOjEsImlhdCI6MTY3MTMwNDMzMywiZXhwIjoxNjcxMzA3OTMzfQ.KN2275IrL_7FETvI4-03kLlKwCuvD2A3li5kj9TVU7k`,
          },
    }).then(getResponseData)
    .catch((err) => {
        return typeof err !== 'string' ? Promise.reject('Ошибка подключения') : Promise.reject(err);
    })}


   /* export const getProductsCSV = () => {
        return fetch(`${BASE_URL}/products/csv`, {
            method: 'GET',
            headers: {
                'accept': '**//*',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrNzc3Nzc3Nzc3NzciLCJ1c2VySWQiOjEsImlhdCI6MTY3MTMwNDMzMywiZXhwIjoxNjcxMzA3OTMzfQ.KN2275IrL_7FETvI4-03kLlKwCuvD2A3li5kj9TVU7k`,
              },
        }).then((response) => response.body)
        .then((rb) => {
          const reader = rb.getReader();
      
          return new ReadableStream({
            start(controller) {
              // The following function handles each data chunk
              function push() {
                // "done" is a Boolean and value a "Uint8Array"
                reader.read().then(({ done, value }) => {
                  // If there is no more data to read
                  if (done) {
                    console.log('done', done);
                    controller.close();
                    return;
                  }
                  // Get the data and send it to the browser via the controller
                  controller.enqueue(value);
                  // Check chunks by logging to the console
                  console.log(done, value);
                  push();
                });
              }
      
              push();
            },
          });
        })
        .then((stream) =>
          // Respond with our stream
          new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
        )
        .then((result) => {
          // Do things with result
          return(result);
        }).catch((err) => console.log(err))
    }*/

    export const putProducts = (data) => {
        return fetch(`${BASE_URL}/admin/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
              },
        }).then(getResponseData)
        .catch((err) => {
            return typeof err !== 'string' ? Promise.reject('Ошибка подключения') : Promise.reject(err);
        })}
