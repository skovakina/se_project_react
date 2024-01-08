import checkResponse from './utils';
import { baseUrl, headers } from './serverApi';

export function signup(data) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      name: data.name,
      avatar: data.avatar,
      email: data.email,
      password: data.password,
    }),
  }).then((res) => checkResponse(res));
}

export function signin(data) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email: data.email, password: data.password }),
  }).then((res) => checkResponse(res));
}

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => checkResponse(res))
    .then((data) => data);
};
