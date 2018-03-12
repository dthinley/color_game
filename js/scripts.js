/*var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
	]
	*/
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();

}

function setupModeButtons() {
    //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

            //if(this.textContent ==="Easy"){
            //	numSquares =3;
            //}else{
            //	numSquares =6;
            //}
            reset();
        });
    }

}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add click listners to square
        squares[i].addEventListener("click", function() {
            var clickedColor = (this.style.backgroundColor);
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct, You Guess Right!";
                resetButton.textContent = "Play Again"
                //if don't match the square will hide
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                //show message on the messge bar
                messageDisplay.textContent = "Try Again";
            }
        });
    }

}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue"

}

resetButton.addEventListener("click", function() {
    reset();
})
// seperate function to match the each color of correct guess
function changeColors(color) {
    //loop through all squars
    for (var i = 0; i < squares.length; i++) {
        //change each color to match the given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//function to generate random colors
function generateRandomColors(num) {
    //make an empty array
    var arr = [];
    //add num random colors to array by looping through the num time
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
        //get random color and push into arr
    }
    // return that array
    return arr;
}

function randomColor() {
    //make an random color
    //by pick a color from "red" 0-255
    var r = Math.floor(Math.random() * 256);
    //by pick a color from "green" 0-255
    var g = Math.floor(Math.random() * 256);
    //by pick a color from "blue" 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}