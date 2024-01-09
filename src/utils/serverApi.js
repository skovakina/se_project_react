import checkResponse from './utils';

const baseUrl = 'http://localhost:3001';
const headers = {
  'Content-Type': 'application/json',
};

export { baseUrl, headers };

export function getItems() {
  return fetch(`${baseUrl}/items`, {
    method: 'GET',
    headers: headers,
  }).then((res) => checkResponse(res));
}

export function postItem(data, token) {
  return fetch(`${baseUrl}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ _id: data._id, name: data.name, weather: data.weather, imageUrl: data.imageUrl }),
  }).then((res) => checkResponse(res));
}

export function deleteItem(itemId, token) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
}

export function updateUser(user, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: user.name, avatar: user.avatar }),
  }).then((res) => checkResponse(res));
}

export function likeItem(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
}

export function dislikeItem(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
}
