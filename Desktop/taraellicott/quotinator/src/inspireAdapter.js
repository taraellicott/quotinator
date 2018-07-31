const inspireURL = "https://favqs.com/api/qotd";

const inspireAdapter = {

  getRandomQuotes: function getRandomQuotes() {

      return fetch(inspireURL)
      .then((response) => response.json())
}
}
