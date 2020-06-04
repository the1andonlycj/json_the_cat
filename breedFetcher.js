const request = require("request"); 

let breedName = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, resp, body) => {
    if (error) {
      return callback(error, null);
    }
    let data = JSON.parse(body);
    if (data[0]) {
      return callback(null, data[0]);
    }
  });
}

module.exports = { fetchBreedDescription };
