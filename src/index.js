let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeelement = sydneyElement.querySelector(".time");
let sydneyTime = moment();

sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[<small>]");