import TileMap from "./Map.js";

const tileSize = 32;
const canvas = document.getElementById('game');
const ctx = canvas.getContext ("2d");
const tileMap = new TileMap (tileSize);

function gameloop ( ){ 
    console.log ("gamer loop");
}
setInterval(gameloop, 1000/75);
