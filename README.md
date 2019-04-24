# Chatbot for ordering garment with customer and cart details
Chatbot responds to the user and helps the user to order a garment by accepting the size and color of the product

## How to run
* Create a project
* Download the src folder and place it in the project
* Turn up the server

For Chatbot
```
http://localhost:3000/chat
```
For Customer details
```
http://localhost:3000/customer
```
For cart details
```
http://localhost:3000/customer/cart
```

## Integration
File named apicall from 'src/App/Overstock/Chatbox' which integrates react code with 
dialogflow(Middleware which makes the chat requests and responses) and it requires a client access token & sessionId
which is to be given by the developer according to the agent in the middleware

## Author
* **Karthikeyan Umapathy** - *Omnibot*
