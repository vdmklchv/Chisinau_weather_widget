const data = document.querySelector('.data');
const feelslike = document.querySelector('.feelslike');
const condition = document.querySelector('.condition');
const button = document.querySelector('.fetch_weather');
const timeInfo = document.querySelector('#time');



function fetchWeather()   {

    fetch('https://api.openweathermap.org/data/2.5/find?q=Chisinau&units=metric&appid=e8e8d6db42e5e9a85b47832e1f430686').then(response => response.json()).then(result => {
        data.innerText = result.list[0].main.temp.toFixed(1);
        feelslike.innerText = result.list[0].main.feels_like.toFixed(1);
        condition.innerText = result.list[0].weather[0].description;
    });
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    timeInfo.innerText = `Last updated at: ${hours}:${minutes}`
};


    fetchWeather();

button.addEventListener('click', () => {
    fetchWeather();
})



