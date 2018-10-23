const createCsvWriter = require('csv-writer').createObjectCsvWriter;

module.exports = (jsons, filename) => {
	const csvWriter = createCsvWriter({
		path: filename,
		header: [
			{id: 'from', title: 'from'},
			{id: 'to', title: 'to'},
			{id: 'rate', title: 'rate'}
		]
	});

	const records = jsons.reduce((acc, json) => acc.concat(rateJsonToCSVRecords(json)), []);
	return csvWriter.writeRecords(records);
};

function rateJsonToCSVRecords(rate) {
	const records = [];
	for (const currency in rate.rates) {
		if (Object.prototype.hasOwnProperty.call(rate.rates, currency)) {
			records.push({
				from: rate.base,
				to: currency,
				rate: rate.rates[currency]
			});
		}
	}
	return records;
}
