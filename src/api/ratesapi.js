const BASE_URL = "https://ratesapi.io/api/latest?";

module.exports = (from, to) => {
    return BASE_URL + `base=${from}&symbols=${to}`;
}