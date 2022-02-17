const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2], (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    if (data[0] !== undefined) {
      console.log(data[0].description);
    } else {
      console.log('This breed does not exist. Please enter another and try again.');
    }
  } else {
    console.log('Ooops! Something went wrong on our end! Please try again later.');
  }
  
});