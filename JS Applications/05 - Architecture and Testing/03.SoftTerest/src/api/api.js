let baseUrl = 'http://localhost:3030/'

async function requester(method, url, body) {

    let token = localStorage.accessToken;

    let request = {
        method,
        headers: {}
    };

    if (body) {
        request.headers['content-type'] = 'application/json';
        request.body = JSON.stringify(body);
    };

    if (token) {
        request.headers['X-Authorization'] = token;
    };

    try {
        let response = await fetch(`${baseUrl + url}`, request)

        if (!response.ok) {
            let data = await response.json();
            throw new Error(data.message);
        };

        if (response.status === 204) {
            return response
        } else {
            return response.json()
        }

    } catch (error) {
        alert(error.message)
        throw error
    }
}

const get = requester.bind(null, 'GET');
const post = requester.bind(null, 'POST');
const put = requester.bind(null, 'PUT');
const del = requester.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    del
}