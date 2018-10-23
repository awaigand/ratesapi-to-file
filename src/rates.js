const axios = require('axios');
const ratesapi = require('./api/ratesapi');

module.exports = getAllRatesJsons;

function getAllRatesJsons(froms, to) {
	const allRequestPromises = [];
	froms.forEach(currency => {
		allRequestPromises.push(axios.get(ratesapi(currency, to)));
	});
	return Promise.all(allRequestPromises)
		.then(values => values.map(val => val.data));
}
