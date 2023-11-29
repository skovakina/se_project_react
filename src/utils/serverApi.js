const baseUrl = 'http://localhost:3001';
const headers = {
  'Content-Type': 'application/json',
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

export function getItems() {
  return fetch(`${baseUrl}/items`, {
    method: 'GET',
    headers: headers,
  }).then((res) => checkResponse(res));
}

export function postItem(data) {
  return fetch(`${baseUrl}/items`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ _id: data._id, name: data.name, weather: data.weather, imageUrl: data.imageUrl }),
  }).then((res) => checkResponse(res));
}

export function deleteItem(itemId) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: 'DELETE',
    headers: headers,
  }).then((res) => checkResponse(res));
}
