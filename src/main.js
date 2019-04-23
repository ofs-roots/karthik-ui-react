var apiai = require('apiai');

var app = apiai("28130ecd48554bb08fbb05ef891020fd");

var request = app.textRequest('black', {
    sessionId: '7e46fbfc-449c-4bf2-bf11-0d43ac328cfd'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();