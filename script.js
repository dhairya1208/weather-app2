const apikey ="4a99becc9fcc686a992d1181254a2e55";
const cityName = document.querySelector('.city input');
const btn= document.querySelector('.city button');


const url = `https://api.openweathermap.org/data/2.5/weather?`;


async function checkweather(cityName) {
    const response = await fetch(url + `q=${cityName.toLowerCase()}&appid=${apikey}&units=metric`);
    var data = await response.json();

    console.log(data);

        document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector('.city-name').innerHTML= data.name;
        document.querySelector('.humidity-speed').innerHTML= `${data.main.humidity}%`;
        document.querySelector('.wind-speed').innerHTML= `${data.wind.speed}KM/H`;

        document.querySelector('.weather').style.display = 'block';

};

btn.addEventListener('click',()=>{
    checkweather(cityName.value);
})
