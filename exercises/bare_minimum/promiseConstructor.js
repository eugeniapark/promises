/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  let promise = new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8', (error, content) => {
      if (error) {
        reject(error)
      } else {
        var firstLine = content.slice(0,content.indexOf("\n"));
        resolve(firstLine);
      }
    })
  })
  
  promise.then((firstLine) => firstLine);
  promise.catch((error) => error);

  return promise;

};


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {

  let promise = new Promise(function(resolve, reject) {
    request(url, function(err, response) {
      if (err) {reject(err)}
      else {resolve(response.statusCode)}
    })
  })

  promise.then((status) => status);
  promise.catch((error) => error);

  return promise;
};


// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
