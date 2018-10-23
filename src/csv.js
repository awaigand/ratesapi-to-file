const createCsvWriter = require('csv-writer').createObjectCsvWriter;

module.exports = (jsons, filename) => {
    let csvWriter = createCsvWriter({
        path: filename,
        header: [
            {id: 'from', title: 'from'},
            {id: 'to', title: 'to'},
            {id: 'rate', title: 'rate'}
        ]
    });

    let records = jsons.reduce((acc,json) => acc.concat(rateJsonToCSVRecords(json)), []);
    return csvWriter.writeRecords(records);
}

function rateJsonToCSVRecords(rate){
    let records = []
    for(let currency in rate.rates){
        records.push({
            from: rate.base,
            to: currency,
            rate: rate.rates[currency]
        })
    }
    return records;
}