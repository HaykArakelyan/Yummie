const getCountries = async () => {
    const result = await fetch("https://restcountries.com/v2/all");
    const countries = await result.json();
    return countries;
}
const initialState = {
    countries: () => getCountries()
}

module.exports = initialState.countries;