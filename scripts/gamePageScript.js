const max = document.getElementById("max");
max.innerHTML = localStorage.getItem("max");
    
const playerOneNick = document.getElementById("playerOneNick");
const playerTwoNick = document.getElementById("playerTwoNick");
const playerOnePontSpan = document.getElementById("playerOnePont");
const playerTwoPontSpan = document.getElementById("playerTwoPont");
playerOneNick.innerHTML = localStorage.getItem("playerOne");
playerTwoNick.innerHTML = localStorage.getItem("playerTwo");

var playerOnePont = 0;
var playerTwoPont = 0;

playerOnePontSpan.innerHTML = playerOnePont;
playerTwoPontSpan.innerHTML = playerTwoPont;

const playerOneBtn = document.getElementById("playerOneBtn");
const playerTwoBtn = document.getElementById("playerTwoBtn");

playerOneBtn.addEventListener("click", () => {
    this.playerOnePont += 1;
    localStorage.setItem("playerOnePont", playerOnePont);
    playerOnePontSpan.innerHTML = localStorage.getItem("playerOnePont");
    testEndGame(localStorage.getItem("playerOnePont"));
}) 

playerTwoBtn.addEventListener("click", () => {
    this.playerTwoPont += 1;
    localStorage.setItem("playerTwoPont", playerTwoPont);
    playerTwoPontSpan.innerHTML = localStorage.getItem("playerTwoPont");
    testEndGame();
}) 

const testEndGame = () => {
    var actualPontPOne = localStorage.getItem("playerOnePont");
    var actualPontPTwo = localStorage.getItem("playerTwoPont");

    if(actualPontPOne == localStorage.getItem("max") || actualPontPTwo == localStorage.getItem(max)){
        window.location.href = "/index.html";
    }
}