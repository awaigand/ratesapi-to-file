import test from 'ava';
import nock from 'nock';
import ratesapiToFile from '.';
import fs from 'fs';

test.beforeEach(t => {
	nock('https://ratesapi.io')
		.get('/api/latest?base=USD&symbols=USD,JPY,GBP')
		.reply(200, {base: 'USD', date: '2018-10-23', rates: {GBP: 0.7676, JPY: 112.1798}});
	nock('https://ratesapi.io')
		.get('/api/latest?base=USD&symbols=GBP')
		.reply(200, {base: 'USD', date: '2018-10-23', rates: {GBP: 0.7676}});
	nock('https://ratesapi.io')
		.get('/api/latest?base=GBP&symbols=USD,JPY,GBP')
		.reply(200, {base: 'GBP', date: '2018-10-23', rates: {JPY: 146.1471, USD: 1.3028}});
	nock('https://ratesapi.io')
		.get('/api/latest?base=JPY&symbols=USD,JPY,GBP')
		.reply(200, {base: 'JPY', date: '2018-10-23', rates: {GBP: 0.0068, USD: 0.0089}});
});

test('Single from and single to currency', async t => {
	var result = await ratesapiToFile.getAllRatesJsons(['USD'], ['GBP']);
	t.deepEqual(result, [{base: 'USD', date: '2018-10-23', rates: {GBP: 0.7676}}]);
});

test('Multiple from and multiple to currencies', async t => {
	var result = await ratesapiToFile.getAllRatesJsons(['USD','JPY','GBP'], ['USD','JPY','GBP']);
	t.deepEqual(result, [{base: 'USD', date: '2018-10-23', rates: {GBP: 0.7676, JPY: 112.1798}}, {base: 'JPY', date: '2018-10-23', rates: {GBP: 0.0068, USD: 0.0089}}, {base: 'GBP', date: '2018-10-23', rates: {JPY: 146.1471, USD: 1.3028}}]);
});

test.cb('Single from and single to currency, written as CSV', t => {
	let expectedCSVString = "from,to,rate\nUSD,GBP,0.7676\n";

	fs.writeFile = function (path, data){
		t.true(data == expectedCSVString)
		t.end();
	}
	ratesapiToFile.writeCSVToFile(['USD'], ['GBP'], 'myCoolThing.csv');

})
