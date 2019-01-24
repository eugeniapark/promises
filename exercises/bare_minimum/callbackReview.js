/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function(filePath, callback)  {
  fs.readFile(filePath, 'utf8', function (err, content) {
    if (err) {
      callback(err);
    } else {
      var firstLine = content.slice(0,content.indexOf("\n"));
      callback(null, firstLine);
    }
  });
}

  // TODO;
  // if (err) console.log('there was an error: ', err)
// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function (err, response) {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
