const api = {
    key: "",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"

}

const city = document.querySelector('.city')
const date = document.querySelector('.date');
const container_img = document.querySelector('.constainer-img');
const container_temp = document.querySelector('.constainer-temp');
const temp_number = document.querySelector('.constainer-temp div');
const temp_unit = document.querySelector('.constainer.img');