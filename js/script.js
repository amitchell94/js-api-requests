

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

xhr.onload = () => {
    let data = JSON.parse(xhr.responseText);
    ipAddress.textContent = data.ip;
    country.textContent = data.country_name;
    region.textContent = data.region_name;
    city.textContent = data.city;
    latLong.textContent = data.latitude + ", " + data.longitude;
    console.log(xhr.status);
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