class Api {
  constructor({ address, token, cohortId }) {
    this._address = address;
    this._token = token;
    this._cohort = cohortId;
  }

  _getResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
  }

  getUserData() {
    return fetch(`${this._address}/v1/${this._cohort}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(response => this._getResponse(response));
  }

  getInitialCard() {
    return fetch(`${this._address}/v1/${this._cohort}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(response => this._getResponse(response));
  }

  editUserData({ name, about }) {
    return fetch(`${this._address}/v1/${this._cohort}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(response => this._getResponse(response));
  }

  addNewCard({ name, link }) {
    return fetch(`${this._address}/v1/${this._cohort}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then(response => this._getResponse(response));
  }

  deleteCard(id) {
    return fetch(`${this._address}/v1/${this._cohort}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    }).then(response => this._getResponse(response));
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return fetch(`${this._address}/v1/${this._cohort}/cards/likes/${id}`, {
        method: 'PUT',
        headers: {
          authorization: this._token
        },
      }).then(response => this._getResponse(response));
    } else {
      return fetch(`${this._address}/v1/${this._cohort}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token
        },
      }).then(response => this._getResponse(response));
    }
  }

  changeAvatar({ avatar }) {
    return fetch(`${this._address}/v1/${this._cohort}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    }).then(response => this._getResponse(response));
  }
}

const api = new Api({
  address: 'https://mesto.nomoreparties.co',
  token: '78cfcf12-b1ee-4c9f-922c-0fac77943b1b',
  cohortId: 'cohort-19'
})

export default api;
