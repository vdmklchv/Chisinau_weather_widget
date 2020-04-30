const data = document.querySelector('.data');
const feelslike = document.querySelector('.feelslike');
const condition = document.querySelector('.condition');
const button = document.querySelector('.fetch_weather');
const timeInfo = document.querySelector('#time');
const image = document.querySelector('.weather-img')


function fetchWeather()   {

    fetch('https://api.openweathermap.org/data/2.5/find?q=Chisinau&units=metric&appid=e8e8d6db42e5e9a85b47832e1f430686').then(response => response.json()).then(result => {
        data.innerText = result.list[0].main.temp.toFixed(1);
        feelslike.innerText = result.list[0].main.feels_like.toFixed(1);
        condition.innerText = result.list[0].weather[0].description;
        if (condition.innerText === 'overcast clouds')    {
            image.innerHTML = '<img src="./img/overcast.svg">';
        }
        else if (condition.innerText === "broken clouds")    {
            image.innerHTML = '<img src="./img/broken_clouds.svg">';
        } else if (condition.innerText === 'thunderstorm')  {
            image.innerHTML = '<img src="./img/thunderstorm.svg">';
        } else if (condition.innerText === 'light rain')    {
            image.innerHTML = '<img src="./img/rain.svg">';
        }
    });
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    if (minutes < 10)   {
        minutes = '0' + minutes;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }
    timeInfo.innerText = `Last updated at: ${hours}:${minutes}`

   
    setInterval(fetchWeather, 600000);
};


fetchWeather();

button.addEventListener('click', () => {
    fetchWeather();
})



