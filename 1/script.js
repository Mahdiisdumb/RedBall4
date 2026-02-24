window.addEventListener("load", () => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("game");
    container.appendChild(player);
    player.style.width = "100%";
    player.style.height = "100%";
    player.load("data.swf");
});