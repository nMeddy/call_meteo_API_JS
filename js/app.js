const APIKey = `1c08149481f1e00f84ede95586f5bf67`;

//Call API
const CallAPI =  function (city){
  const DataApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=fr`;
  fetch(DataApi)
    .then((res) =>
      res.json().then((data) => {
        console.log(data);
        document.querySelector("#city").innerHTML =
          `<i class="fa-solid fa-city"></i>` + data.name;
        document.querySelector("#tmp").innerHTML =
          `<i class="fa-solid fa-temperature-three-quarters"></i>` +
          data.main.temp +
          ` °C`;
        document.querySelector("#humidity").innerHTML =
          `<i class="fa-solid fa-droplet"></i>` + data.main.humidity;
        document.querySelector("#wind").innerHTML =
          `<i class="fa-solid fa-wind"></i>` + data.wind.speed + ` Km/h`;
      })
    )
    .catch((err) => console.log(`erreur : ` + err));
};

//Traitement du Formulaire
document.querySelector(`form`).addEventListener(`submit`, function (e) {
  e.preventDefault();
  const ville = document.querySelector(`#inputCity`).value

  CallAPI(ville);
});
CallAPI(`Kinshasa`);
