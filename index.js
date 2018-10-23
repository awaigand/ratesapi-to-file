'use strict';

const rates = require('./src/rates.js');
const csv = require('./src/csv.js');

module.exports = {
	writeCSVToFile: (froms, to, filename) => rates(froms, to).then(jsons => csv(jsons, filename)),
	getAllRatesJsons: rates
};

