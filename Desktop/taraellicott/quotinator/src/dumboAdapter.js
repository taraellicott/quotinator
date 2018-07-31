const dumboUrl = 'http://localhost:3000';

const dumboAdapter = {

getAll: function getAll() {
  return fetch(dumboUrl)
    .then((response) => response.json())
}

// function getQuote() {
//   fetch(baseUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       displayQuote(data.message);
//     })
//     .catch(function () {
//       console.log("An error occurred");
//     });
// }

// function displayQuote(quote) {
//   const quoteText = document.querySelector('.fourth');
//   quoteText.textContent = quote;
// }

// const newQuoteButton = document.querySelector('.nav');
// newQuoteButton.addEventListener('click', getQuote);
//
// getQuote();
//
// createOne: function createOne(data) {
//   const baseURL = 'http://localhost:3000/create';
//
//   fetch(url, options = {method, headers, body})
//   return fetch(baseURL, {
//     method: 'POST',
//     headers: {
//       'Accept':  'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   }).then((resp) => resp.json());
// },
//
//
// getOne: function getOne(id) {
//   const baseURL = 'http://localhost:3000/create';
//
//   return fetch(`${baseURL}/${id}`).then((resp) => resp.json());
// },
//
// updateOne: function updateOne(id, data) {
//   const baseURL = 'http://localhost:3000/create';
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Accept':  'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   };
//
//   return fetch(`${baseURL}/${id}`, options).then((resp) => resp.json());
// },
//
// deleteOne: function deleteOne(id) {
//   const baseURL = 'http://localhost:3000/create';
//   const options = {
//     method: 'DELETE',
//     headers: {
//       'Accept':  'application/json',
//       'Content-Type': 'application/json'
//     }
//   }
//   return fetch(`${baseURL}/${id}`, options).then((resp) => resp.json());
// }
}
