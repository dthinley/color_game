/*var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
	]
	*/
var colors = generateRandomColors(6);

var squares =document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

//loop through all colors
for(var i=0; i < squares.length; i++){
	//add initial colors to each square
	squares[i].style.backgroundColor = colors[i];

	//add click listners to square
	squares[i].addEventListener("click", function(){
		var clickedColor =(this.style.backgroundColor);
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent ="Correct, You Guess Right!";
			//if don't match the square will hide
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			//show message on the messge bar
			messageDisplay.textContent ="Try Again";
		}

	});
}

// seperate function to match the each color of correct guess
function changeColors(color){
	//loop through all squars
	for(var i=0; i<squares.length; i++){
		//change each color to match the given color
		squares[i].style.backgroundColor=color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


//function to generate random colors
function generateRandomColors(num){
	//make an empty array
	var arr=[];
	//add num random colors to array by looping through the num time
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
		//get random color and push into arr
	}
	// return that array
	return arr;
}

function randomColor(){
	//make an random color
	//by pick a color from "red" 0-255
	var r = Math.floor(Math.random()* 256);
	//by pick a color from "green" 0-255
	var g = Math.floor(Math.random()* 256);
	//by pick a color from "blue" 0-255
	var b = Math.floor(Math.random()* 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";



}