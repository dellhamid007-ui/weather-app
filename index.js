async function getWeatherJSON(){

    try{
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,sunrise,sunset,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,daylight_duration&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,rain,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,weather_code&timezone=auto');
        const data = await response.json();

        console.log(data);
        return data;

    }

    catch(error){
        console.error('An error occured', error);
    }

    

}

const latSpan = document.getElementById('lat-span');
const longSpan = document.getElementById('long-span');
const tzSpan = document.getElementById('tz-span');

const tempContainer = document.getElementsByClassName('temp-container');

document.addEventListener('DOMContentLoaded', async ()=>{
    const data = await getWeatherJSON();

    if(data){
        latSpan.textContent = data.latitude;
        longSpan.textContent = data.longitude;
        tzSpan.textContent = data.timezone + " " + data.timezone_abbreviation;

        tempContainer[0].children[0].textContent = data.current.temperature_2m;

    }
});