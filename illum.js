// REQUEST INITIALIZATION
// Load the npm package: "request"
var request = require("request");

// IMPORT PCE LOGIN CREDENTIALS
var auth = require("./auth.js");

// REQUEST HEADER OUTPUT FORMAT
var headers = {
    'Accept': 'application/json'
};

// GET REQUEST OPTIONS (GET ALL LABELS) 
var options = {
    url: 'https://demo6.illum.io/api/v2/orgs/24/labels',
    headers: headers,
    auth: auth
};

// RESPONSE & ERROR HANDLING 
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

// GET REQUEST --> PRINT OUTPUT TO CONSOLE
request.get(options, callback);
