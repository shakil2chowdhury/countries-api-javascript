//fetch rest api for countries

fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(datas => countries(datas))


//get countries name and capital
const countries = data => {
    const div = document.getElementById("countryList");
    data.forEach(element => {
        const innerDiv = document.createElement('div');
        innerDiv.className = 'country';
        const country = `<h3 class="countryName">${element.name}</h3>
        <p>Capital : ${element.capital}</p>
        <button onclick="countryDetails('${element.name}')">Details</button>
        `
        innerDiv.innerHTML = country;
        div.appendChild(innerDiv);
    });
}

//fetch and display country details after clicking details button
const countryDetails = name => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        .then(res => res.json())
        .then(datas => countryInfo(datas[0]))
    const countryDetails = document.getElementById('countryDetails');
    const countryInfo = country => {
        countryDetails.innerHTML = `
        <h3>${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <p>Area: ${country.area}</p>
        <p>Population : ${country.population} </p>
        <p>Currency: ${country.currencies[0].code}</p>
        <img src="${country.flag}"</img>
        `
    }

}