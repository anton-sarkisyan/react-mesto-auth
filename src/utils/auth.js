const address = 'https://auth.nomoreparties.co';

const responseCheck = (response) => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);

export function signUp({ password, email }) {
  return fetch(`${address}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password: password,
      email: email
    })
  })
    .then(responseCheck)
    .then(response => response);
}

export function signIn({ password, email }) {
  return fetch(`${address}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password: password,
      email: email
    })
  })
    .then(responseCheck)
    .then(response => response);
}

export function getData({ jwt }) {
  return fetch(`${address}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`
    }
  })
    .then(responseCheck)
    .then(response => response);
}
