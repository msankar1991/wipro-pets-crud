# Pets Code
Node.js application steps need to follow after cloning this repository

## How to install:

1. Clone this repository first https://github.com/msankar1991/wipro-pets-crud.
2. Navigate to `cd wipro-pets-crud`
3. `npm install` within project folder to install dependencies.
4. `node app.js` to run application

## Test API's:
1. This will run the backend server at localhost:4002. 
2. If all is going well, you should be able to access the url following end point from your Postman.
3. For creating new pets : http://localhost:4002/pets with requested payload
4. For getting pets data : http://localhost:4002/pets/:id specific id created
5. For deleting pets data : http://localhost:4002/pets/:id specific id created already

#sample for creating pets record { "name":"Brownie", "age":2, "color":"brown" }