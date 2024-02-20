const max = document.getElementById("max");
max.innerHTML = localStorage.getItem("max");
const maxPont = localStorage.getItem("max");

localStorage.setItem("playerOnePont", 0);
localStorage.setItem("playerTwoPont", 0);
    
const playerOneNick = document.getElementById("playerOneNick");
const playerTwoNick = document.getElementById("playerTwoNick");
const playerOnePontSpan = document.getElementById("playerOnePont");
const playerTwoPontSpan = document.getElementById("playerTwoPont");
playerOneNick.innerHTML = localStorage.getItem("playerOne");
playerTwoNick.innerHTML = localStorage.getItem("playerTwo");

var playerWithHand = -1; 

var playerOnePont = 0;
var playerTwoPont = 0;

playerOnePontSpan.innerHTML = playerOnePont;
playerTwoPontSpan.innerHTML = playerTwoPont;

const playerOneBtn = document.getElementById("playerOneBtn");
const playerTwoBtn = document.getElementById("playerTwoBtn");

const playerOneDiv = document.getElementById("playerOneDiv");
const playerTwoDiv = document.getElementById("playerTwoDiv");

const changePlayerHand = () => {
    const divOne = document.getElementById("divOne");
    const divTwo = document.getElementById("divTwo");

    if(playerWithHand == 0 || playerWithHand == -1) {
        divOne.style.visibility = "visible";
        divTwo.style.visibility = "hidden";
        playerWithHand = 1;
        playerTwoDiv.classList.remove("hasHand");
        playerOneDiv.classList.add("hasHand");
    } else {
        divTwo.style.visibility = "visible";
        divOne.style.visibility = "hidden";
        playerWithHand = 0;
        playerOneDiv.classList.remove("hasHand");
        playerTwoDiv.classList.add("hasHand");
    }
}

changePlayerHand();

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

    if(actualPontPOne == maxPont || actualPontPTwo == maxPont) {
        window.location.href = '/index.html'
    }   

    changePlayerHand();
}