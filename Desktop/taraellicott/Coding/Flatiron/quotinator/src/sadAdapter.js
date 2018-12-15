const sadUrl = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

const sadAdapter = {

getRandomQuotes: function getRandomQuotes() {
  return fetch(sadUrl)
    .then((response) => response.json());
}


// function getQuote() {
//     const baseUrl = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
//   return fetch(baseUrl)
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
//
// function displayQuote(quote) {
//   const quoteText = document.querySelector('.fourth');
//   quoteText.textContent = quote;
// }

// const newQuoteButton = document.querySelector('.nav');
// newQuoteButton.addEventListener('click', getQuote);

// getQuote();
}
