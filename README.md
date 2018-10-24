# ratesapi-to-file [![Build Status](https://travis-ci.org/awaigand/ratesapi-to-file.svg?branch=master)](https://travis-ci.org/awaigand/ratesapi-to-file)

> The cli grabs the current exchange rates from ratesapi.io and writes them to a formatted csv file. You can also use it in a node module.

## Example Output
```
from,to,rate
USD,EUR,0.8712
USD,GBP,0.7676
EUR,GBP,0.88103
EUR,USD,1.1478
GBP,EUR,1.135
GBP,USD,1.3028
```

## Install

```
$ npm install ratesapi-to-file
```

## CLI

```
$ npm install --global ratesapi-to-file
```

The Cli is in dialog form. Defaults are given in ().

```
$ ratesapi-to-file 

>: For what currency (or currencies) do you want the rates? (ex.: USD, EUR, GBP):  (USD, EUR, GBP)
>: Exchange rates for which currency (currencies) to you want for those currencies? (ex.: USD, JPY, CHK):  (USD, EUR, GBP)
>: Filename? (ex.: myExchangeRates.csv):  (myExchangeRates.csv)
```




## API

### writeCSVToFile(froms, to, filename)

Gets all exchange rates from `froms` to `to` and writes them as a csv to filename.

#### froms
The base currencies you want the rates for (i.e. *USD* to EUR ).

Type: `array`<br>
Example: `['USD','GBP']`

#### to
The target currencies you want the rates for (i.e. USD to *EUR* ).

Type: `array`<br>
Example: `['EUR','GBP']`


#### filename
The filename for your csv file.

Type: `string`<br>
Example: `"myCSVFile.csv"`

#### Returns

```
from,to,rate
USD,EUR,0.8712
USD,GBP,0.7676
EUR,GBP,0.88103
EUR,USD,1.1478
GBP,EUR,1.135
GBP,USD,1.3028
```

### getAllRatesJsons(froms, to)

Gets all exchange rates from `froms` to `to` and
returns a promise for all rate jsons. 

#### Returns

`[{"base":"USD","date":"2018-10-19","rates":{"EUR":0.8718,"GBP":0.7674}}]`



## License

MIT © [Andreas Waigand](https://andreaswaigand.de)
