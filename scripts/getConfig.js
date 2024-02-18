const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
    const playerOne = document.getElementById("playerOne").value;
    const playerTwo = document.getElementById("playerTwo").value;
    const max = document.getElementById("max").value;

    localStorage.setItem("playerOne", playerOne);
    localStorage.setItem("playerTwo", playerTwo);
    localStorage.setItem("max", max);

    window.location.href = "newGame.html";
})

