function updateCityTime(cityElement) {
  let cityTime = moment().tz(cityElement.dataset.timezone);
  cityElement.querySelector(".date").innerHTML = cityTime.format("MMMM Do YYYY");
  cityElement.querySelector(".time").innerHTML = cityTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}

function updateTime() {
  document.querySelectorAll(".city[data-timezone]").forEach(updateCityTime);
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let selectedCityElement = document.querySelector("#selected-city");
  selectedCityElement.innerHTML = "";

    if (!cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    return;
  }

  let cityName = event.target.selectedOptions[0].textContent;
  selectedCityElement.innerHTML = `
    <div class="city" data-timezone="${cityTimeZone}">
      <div>
        <h2>${cityName}</h2>
        <div class="date"></div>
      </div>
      <div class="time"></div>
    </div>`;
  updateCityTime(selectedCityElement.querySelector(".city"));
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
  