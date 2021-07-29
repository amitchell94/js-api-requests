

let xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.ipstack.com/check?access_key=d7f35f8de422e9c14af70542aee0991a");

xhr.onerror = () => {
    console.log("error");
};
xhr.ontimeout = () => {
    console.log("timeout");
};

let ipAddress = document.getElementById("ipAddress")
let country = document.getElementById("country")
let region = document.getElementById("region")
let city = document.getElementById("city")
let latLong = document.getElementById("latLong")
let flag = document.getElementById("flag")
xhr.onload = () => {
    let data = JSON.parse(xhr.responseText);
    ipAddress.textContent = data.ip;
    country.textContent = data.country_name;
    region.textContent = data.region_name;
    city.textContent = data.city;
    latLong.textContent = data.latitude + ", " + data.longitude;
    flag.src = data.location.country_flag;
    console.log(data.location.country_flag)
    console.log(xhr.status);


    let countryXhr = new XMLHttpRequest();
    countryXhr.open("GET", "https://restcountries.eu/rest/v2/alpha/" + data.country_code);

    countryXhr.onerror = () => {
        console.log("error");
    };
    countryXhr.ontimeout = () => {
        console.log("timeout");
    };

    let population = document.getElementById("population");
    let language = document.getElementById("language");
    let regionalBloc = document.getElementById("regionalBloc")
    countryXhr.onload = () => {
        let countryData = JSON.parse(countryXhr.responseText);
        population.textContent = countryData.population;
        regionalBloc.textContent = countryData.region;
        language.textContent = countryData.languages[0].name

        console.log(countryXhr.status);
    };

    countryXhr.send();

    let sunsetXhr = new XMLHttpRequest();
    sunsetXhr.open("GET", "https://api.sunrise-sunset.org/json?lat=" + data.latitude + "&lng=" + data.longitude);

    sunsetXhr.onerror = () => {
        console.log("error");
    };
    sunsetXhr.ontimeout = () => {
        console.log("timeout");
    };

    let sunriseTime = document.getElementById("sunrise");
    let sunsetTime = document.getElementById("sunset");
    let dayLength = document.getElementById("dayLength");
    let solarNoonTime = document.getElementById("solarNoon");
    sunsetXhr.onload = () => {
        let sunsetData = JSON.parse(sunsetXhr.responseText);
        console.log(sunsetData)
        sunriseTime.textContent = sunsetData.results.sunrise;
        sunsetTime.textContent = sunsetData.results.sunset;
        dayLength.textContent = sunsetData.results.day_length;
        solarNoonTime.textContent = sunsetData.results.solar_noon;

        console.log(sunsetXhr.status);
    };

    sunsetXhr.send();

};

xhr.send();

let timeXhr = new XMLHttpRequest();
timeXhr.open("GET", "http://worldtimeapi.org/api/ip");

timeXhr.onerror = () => {
    console.log("error");
};
timeXhr.ontimeout = () => {
    console.log("timeout");
};

let timeZone = document.getElementById("timeZone");
let time = document.getElementById("time");

timeXhr.onload = () => {
    let data = JSON.parse(timeXhr.responseText);
    timeZone.textContent = data.abbreviation;
    let dateTime = new Date(data.datetime);
    time.textContent = dateTime.toLocaleTimeString()

    console.log(timeXhr.status);
};

timeXhr.send();


