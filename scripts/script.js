const newGameButton = document.getElementById("newGame");
const leaderboardButton = document.getElementById("leaderboard");
const registryButton = document.getElementById("registryBtn");

newGameButton.addEventListener("click", () => {
    window.location.href = "./pages/config.html";
});

leaderboardButton.addEventListener("click", () => {
    window.location.href = "./pages/endedGames.html";
})

registryButton.addEventListener("click", () => {
    window.location.href = "./pages/registry.html";
})