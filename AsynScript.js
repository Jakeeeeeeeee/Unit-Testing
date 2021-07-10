const fetch = require('node-fetch');

const getPeople = (fetch) => {
  return fetch('https://swapi.dev/api/people')
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
      return {
        count: data.count,
        results: data.results
      }
    })     
}

getPeople(fetch);