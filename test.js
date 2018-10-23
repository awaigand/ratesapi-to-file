import test from 'ava';
import ratesapiToFile from '.';

test('title', t => {
	const err = t.throws(() => {
		ratesapiToFile(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(ratesapiToFile('unicorns'), 'unicorns & rainbows');
});
