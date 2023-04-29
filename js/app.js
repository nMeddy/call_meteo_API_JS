const APIKey = `1c08149481f1e00f84ede95586f5bf67`;
const CitySearch = document.getElementById(`inputCity`);
const DataApi = `https://api.openweathermap.org/data/2.5/weather?q=Kinshasa&appid=${APIKey}&units=metric&lang=fr`;

//Call API
fetch(DataApi).then((res) =>
  res.json().then((data) => {
    console.log(data);
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#tmp').innerHTML = data.main.temp + `°C`;
    document.querySelector('#humidity').innerHTML = data.main.humidity;
    document.querySelector('#wind').innerHTML = data.wind.speed + `Km/h`;
  })
);
