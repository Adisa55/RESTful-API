const express = require('express');
const request = require('request');
const expressWinston = require('express-winston');


const app = express();

const logger = require('./logging')

// changes
app.use(expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true
}))


app.get('/current', (requ, responsee) => {
	let city = requ.query.city;
	var request = require('request');
	request(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d9f5b653bf425205b8920bd722529c4`,
		function(errors, resPonse, info) {
			let data = JSON.parse(info);
			if (!errors && resPonse.statusCode === 200) {
				responsee.send(`In your city "${city}" the weather is ${data.weather[0].description}!`);
			}
            else {
                responsee.status(resPonse.statusCode).send('Invalid location, please try again!');
            }
		}

	);

});


app.get('/forecast', (requ, responsee) => {
	let city = requ.query.city;
	var request = require('request');
	request(
		`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0d9f5b653bf425205b8920bd722529c4`,
		function(errors, resPonse, info) {
			let data = JSON.parse(info);
			if (!errors && resPonse.statusCode === 200) {
				responsee.send(`In your city "${city}" the weather is ${data.list[0].weather[0].description}!`);
			}
            else {
                responsee.status(resPonse.statusCode).send('Invalid location, please try again!');
            }
		}

	);

});

app.get('/air_pollution', (requ, responsee) => {
	let lat = requ.query.lat;
    let lon = requ.query.lon;
	var request = require('request');
	request(
		`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=0d9f5b653bf425205b8920bd722529c4`,
		function(errors, resPonse, info) {
			let data = JSON.parse(info);
			if (!errors && resPonse.statusCode === 200) {
				responsee.send(`The air pollution of the given location (lat=${lat} and lon=${lon}) is ${data.list[0].main.aqi} (2 is Air Quality Index). The component are: 
                CO: ${data.list[0].components.co}, NO: ${data.list[0].components.no},  NO2: ${data.list[0].components.no2},  O3: ${data.list[0].components.o3},  SO2: ${data.list[0].components.so2},
                PM2.5: ${data.list[0].components.pm2_5}, PM10: ${data.list[0].components.pm10}, NH3: ${data.list[0].components.nh3}. `);
			}
            else {
                responsee.status(resPonse.statusCode).send('Invalid location, please try again!');
            }
		}

	);

});

app.listen(3000)