function updateTime(event) { 
  //Sydney Time

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  //Hong Kong Time

  let hongKongElement = document.querySelector("#hong-kong");
  let hongKongDateElement = hongKongElement.querySelector(".date");
  let hongKongTimeElement = hongKongElement.querySelector(".time");
  let hongKongTime = moment().tz("Asia/Hong_Kong");

  hongKongDateElement.innerHTML = hongKongTime.format("MMMM Do YYYY");
  hongKongTimeElement.innerHTML = hongKongTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  //Berlin Time

  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityTimeZone}</h2>
        <div class="date">${cityTimeZone.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
     </div>`;




    console.log(cityTime.format("MMMM Do YYYY, h:mm:ss A"));
    
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
  