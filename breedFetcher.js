const request = require("request"); 
const fs = require('fs');

let userInput = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log(`Error text: ${error}` )
  };
  if(data[0] === undefined) {
    console.log("Sorry, that search didn't turn anything up.")
  } else {
    console.log(data[0]);
  };
});



//  console.log(`Data type is: ${typeof data}`);

//OLD FETCHER FUNCTION FROM W2D3
//console.log(requestArgs);

/* request(requestArgs[0], (error, response, body) => {
  if(error) {
    console.log("There appears to be something wrong with the URL...")
  }
  fs.writeFile(requestArgs[1], body, (error) => {
    if(error) {
      console.log("Oops. Try again.");
    }
    if(fs.exists(`./${requestArgs[1]}`)) {
      console.log("File already exists. Please choose another.")
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${requestArgs[1]}`)
  });  
});
console.log('hello');
 */