document.addEventListener("DOMContentLoaded", function() {
  // const quotes1 = document.querySelector(".fourth");
  const quotesDiv = document.querySelector("#quotes");
  const authorsDiv = document.querySelector("#authors");

  const inspireButton = document.querySelector("#inspire-button");
  inspireButton.addEventListener("click", getAllGood);

  const sadButton = document.querySelector("#sad-button");
  sadButton.addEventListener("click", getAllBad);

  const dumboButton = document.querySelector("#dumbo-button");
  dumboButton.addEventListener("click", getAllDumbo);

  const createButton = document.querySelector("#create-button");
  createButton.addEventListener("click", createDumbo);




function getAllGood() {
  inspireAdapter.getRandomQuotes()
    .then(function(myJson) {
      quotesDiv.innerHTML = `<h3>${myJson.quote.body}</h3>`
      authorsDiv.innerHTML = `<h3> - ${myJson.quote.author}</h3>`
  })
}



function getAllBad() {
  sadAdapter.getRandomQuotes()
  .then (function(myJson) {
    quotesDiv.innerHTML = `<h5>${myJson.message}</h5>`
    authorsDiv.innerHTML = `<h5>  - Donald Trump </h5>`
      })

}


function getAllDumbo () {
dumboAdapter.getAll()
  .then(function(myJson) {
   quotesDiv.innerHTML = `<h3>${myJson.quote.body}</h3>`
   authorsDiv.innerHTML = `<h2> - ${myJson.quote.author}</h2>`
})

}


function createDumbo () {
  dumboAdapter.createOne()
    .then(function(myJson) {

    })

  }
})
