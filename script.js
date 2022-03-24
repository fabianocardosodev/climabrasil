const api = {
    key: "d341e5cb9626afc4800921e7ba6f6c8f",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"

}

const city = document.querySelector('.city')
const date = document.querySelector('.date');
const container_img = document.querySelector('.constainer-img');
const container_temp = document.querySelector('.constainer-temp');
const temp_number = document.querySelector('.constainer-temp div');
const temp_unit = document.querySelector('.constainer.span');
const weather_t = document.querySelector('.weather');
const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('btn');
const low_high = document.querySelector('.low-high');

search_button.addEventListener('click', function() {
    searchResults(search_input.value)
})

search_input.addEventListener('Keypress', enter)

function enter(event) {
    key = event.keyCode
    if (key === 13) {
        searchResults(search.input.value)
    }
}