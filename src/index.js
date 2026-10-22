setInterval(function () {

    //Sydney Time

    let sydneyElement = document.querySelector("#sydney");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);   
    


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
berlinTimeElement.innerHTML = berlinTime.format("h:mm:ss [<small>]A[</small>]");