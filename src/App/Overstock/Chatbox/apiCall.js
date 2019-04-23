const apiCall = (props) => {
    var apiai = require('apiai');

    var app = apiai("28130ecd48554bb08fbb05ef891020fd");
    var request = app.textRequest(props.inputText.value, {
        sessionId: '7e46fbfc-449c-4bf2-bf11-0d43ac328cfd'
        
    });

    request.on('response', function(response) {
        props.setResponse(response.result.fulfillment.messages[0].speech);
        console.log(response.result.fulfillment.messages[0].speech);
    });

    request.on('error', function(error) {
        console.log(error);
    });

    request.end();
    return(null)
}

export default apiCall;