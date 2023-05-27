import TileMap from "./Map.js";

const tileSize = 32;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);

function gameloop ( ){ 
    console.log("here");
    tileMap.draw (ctx);

}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75);
