# RESTful-API

 ----------

API provider: https://openweathermap.org/

Task: Develop a RESTful API for a weather app. 
API endpoints: current, forecast, air pullution 


Initialize project:
npm init -y 

Required package:
npm i express request  

Install nodemon: 
npm i -g nodemon

Install logger:
npm i logger

Install winston:
npm i winston

Install swagger:
npm i swagger-ui-express

Install cache:
npm i node-cache

For the server I use: port 5000
According to the endpoints, app.get() is used to get requests for current, forecast and air pollution enpoints.

let city = req.query.city --- collects from the request the value of the 'city' query parameter. The 'city' will be provided in the URL format of:
- '/current?city=Visoko',
- '/forecast?city=Visoko',
and 'lat' and 'loan' will be provided in the URL format of:
- '/air_polution?city=Visoko'.

For API provider, it is necessary to get 'key', which will be sent to us on email when we register.
In the API provider we will find URL for the requests of our endpoints.
In this case: 
- https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}
- https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid={API key}
- http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}
Instead of 'API key' you will write you own 'key'.

'If' conditions are used to handle API errors. So, for the invalid location and invalid coordinates you will get message "Invalid location, please try again"
(200 ---- OK means no error
404---Bad Request)

For logger, there are two .log files .rest file in this project.
- In .log files it will be printed all GET requests of URL.
- In .rest file we write all GET URL for which we send request.

The best way to test does our URLs work properly is to use POSTMAN. In Postman we put all of our requests that represent endpoints.
Here you can find all requests saved in Postman: Api.postman_collection.json

A tool for developing interactive API documentation is called Swagger. Title for this swahher is 'API - homework', and URL: http://localhost:5000/api-docs/. 

Using the method of caching, expensive or time-consuming activities can be saved so that later requests for the same operation can be fulfilled without having to repeat it.
In this case I put cache(400) - cache duration, that is approximatelly 6 minutes and 40 secundes.


Implementing authentication:
In .json file, there are some usernames and passwords that must be entered to acces URL: http://localhost:5000/.
For example:
username: adisa
password: cvijet123 , is one of the options. If user enter the wronf username or password, he/she cannot see the weather.