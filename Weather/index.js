
 
 const apikey="645666abdb27833d2237dc6121d20024"
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
 const city = document.querySelector('.city');
 const temp = document.querySelector('.temp');
 const humidity = document.querySelector('.humidity');
 const wind = document.querySelector('.wind');
 const search = document.querySelector('.search input');
 const searchBtn = document.querySelector('.search button');
const imgs = document.querySelector('.weather-icon');
const weather = document.querySelector('.weather');
const pressure = document.querySelector('.pressure');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const btn = document.querySelector('.btn');


// Fetch the Weather Information

 async function checkWeather(citys){
    const response = await fetch(`${apiUrl}${citys}&appid=${apikey}`);
    if(response.status == 404 ){
        document.querySelector('.misspell').style.display = 'block';
        weather.style.display = 'none';
    }


    else{
        var data = await response.json();
    console.log(data)

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + '°c';
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}km/h`;
    pressure.innerHTML = `${data.main.pressure}`
    sunrise.innerHTML = `${data.sys.sunrise}`
    sunset.innerHTML = `${data.sys.sunset}`

    if(data.weather[0].main == 'Clouds'){
        imgs.src = "img/clouds.png";
    }

    else if(data.weather[0].main == 'Clear'){
        imgs.src = "img/clear.png";
    }

    else if(data.weather[0].main == 'Rain'){
        imgs.src = "img/rain.png";
    }

    else if(data.weather[0].main == 'Drizzle'){
        imgs.src = "img/drizzle.png";
    }

    else if(data.weather[0].main == 'Mist'){
        imgs.src = "img/mist.png";
    }

    
 }
    }


    

searchBtn.addEventListener('click' , ()=>{
    checkWeather(search.value);
    search.value = '';
    weather.style.display = 'block';
    document.querySelector('.misspell').style.display = 'none';
})


// Toogle Button to show/hide the information

btn.addEventListener('click' , ()=>{
    if(document.querySelector('.information').style.display === 'none'){
        document.querySelector('.information').style.display = 'block'
        btn.innerText = "Hide Additional Information"

    }
   else{
    document.querySelector('.information').style.display = 'none'
    btn.innerText = "Show Additional Information"
   }
   
})









