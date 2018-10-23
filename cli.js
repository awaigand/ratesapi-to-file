#!/usr/bin/env node
'use strict';
const prompt = require('prompt');
const ratesapiToFile = require('.');

prompt.message = '>';
prompt.start();

const schema = {
	properties: {
		fromCurrency: {
			description: 'For what currency (or currencies) do you want the rates? (ex.: USD, EUR, GBP)',
			type: 'string',
			default: 'USD, EUR, GBP'
		},
		toCurrency: {
			description: 'Exchange rates for which currency (currencies) to you want for those currencies? (ex.: USD, JPY, CHK)',
			type: 'string',
			default: 'USD, EUR, GBP'
		},
		fileName: {
			description: 'Filename? (ex.: myExchangeRates.csv)',
			type: 'string',
			default: 'myExchangeRates.csv'
		}
	}
};

prompt.get(schema, (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	ratesapiToFile.writeCSVToFile(prepareArg(result.fromCurrency), result.toCurrency.replace(/ /g, ''), result.fileName);
});

function prepareArg(arg) {
	return arg.replace(/ /g, '').split(',');
}
