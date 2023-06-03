import TileMap from "./TileMap.js";

const tileSize = 32;
const velocity = 1;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman(velocity);
const enemies = tileMap.getEnemies(velocity);
let gameOver = false;
let gameWin = false;
const gameOverSound = new Audio("sounds/gameOver.wav");
const gameWinSound = new Audio("sounds/gameWin.wav");

function gameLoop() {
    tileMap.draw(ctx);
    pacman.draw(ctx, pause(), enemies);
    enemies.forEach((enemy) => enemy.draw(ctx, pause(), pacman));

  }

  function pause() {
    return !pacman.madeFirstMove || gameOver || gameWin;
  }
  

  function checkGameWin() {
    if (!gameWin) {
      gameWin = tileMap.didWin();
      if (gameWin) {
        gameWinSound.play();
      }
    }
  }
  
  function checkGameOver() {
    if (!gameOver) {
      gameOver = isGameOver();
      if (gameOver) {
        gameOverSound.play();
      }
    }
  }
  
  function isGameOver() {
    return enemies.some(
      (enemy) => !pacman.powerDotActive && enemy.collideWith(pacman)
    );
  }

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75);