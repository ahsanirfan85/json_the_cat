const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    let err = null;
    const data = JSON.parse(body);
    let desc = null;

    if (body === undefined) {
      err = 'Oops! Something went wrong on our end! Please try again later';
    } else if (data[0] === undefined) {
      err = 'Breed does not exist. Please enter another breed.'
    } else {
      desc = data[0].description;
    }
    callback(err, desc);
  });
};

module.exports = { fetchBreedDescription };