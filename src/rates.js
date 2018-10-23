const ratesapi = require('./api/ratesapi');
const axios = require('axios');

module.exports = getAllRatesJsons

function getAllRatesJsons(froms, to){
	let allRequestPromises = [];
	froms.forEach((currency) => {
		allRequestPromises.push(axios.get(ratesapi(currency, to)));
	})
	return Promise.all(allRequestPromises)
		.then( values => values.map(val => val.data) );
}
