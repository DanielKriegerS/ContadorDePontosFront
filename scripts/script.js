const newGameButton = document.getElementById("newGame");
const leaderboardButton = document.getElementById("leaderboard");

newGameButton.addEventListener("click", () => {
    window.location.href = "./pages/config.html";
});

leaderboardButton.addEventListener("click", () => {
    window.location.href = "./pages/endedGames.html";
})