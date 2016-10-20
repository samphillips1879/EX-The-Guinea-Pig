var article = document.getElementById("article");
var outputTarget = document.getElementById("output-target");
var pageTitle = document.getElementById("page-title");
var userInput = document.getElementById("keypress-input");
var pig = document.getElementById("guinea-pig");
var addColor = document.getElementById("add-color");
var hulkify = document.getElementById("make-large");
var captureIt = document.getElementById("add-border");
var rounded = document.getElementById("add-rounding");

function articleClickHandler(event) {

	outputTarget.innerHTML = "You clicked on the " + event.target.innerHTML + " section";
}

function headerMouseoverHandler(event) {
	outputTarget.innerHTML = "You moved your mouse over the header";
}

function headerMouseoutHandler(event) {
	outputTarget.innerHTML = "You left me!!"
}

function inputHandler(event) {
	outputTarget.innerHTML = userInput.value;
}

function colorHandler() {
	pig.classList.toggle("blue");
}

function hulkifyHandler() {
	pig.classList.toggle("hulk");
}

function captureItHandler() {
	pig.classList.toggle("captured");
}

function roundedHandler() {
	pig.classList.toggle("rounded");
}


article.addEventListener("click", articleClickHandler);
pageTitle.addEventListener("mouseover", headerMouseoverHandler);
pageTitle.addEventListener("mouseout", headerMouseoutHandler);
userInput.addEventListener("keyup", inputHandler);
addColor.addEventListener("click", colorHandler);
hulkify.addEventListener("click", hulkifyHandler);
captureIt.addEventListener("click", captureItHandler);
rounded.addEventListener("click", roundedHandler);