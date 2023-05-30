import MovingDirection from "./MovingDirection.js";
export default class Enemy {
    constructor(x, y, tileSize, velocity, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tileMap = tileMap;

        this.#loadImages();

        this.movingDirection = Math.floor(
          Math.random() * Object.keys(MovingDirection).length
        );
    
        this.directionTimerDefault = this.#random(10, 25);
        this.directionTimer = this.directionTimerDefault;
    
        this.scaredAboutToExpireTimerDefault = 10;
        this.scaredAboutToExpireTimer = this.scaredAboutToExpireTimerDefault;
      }
      draw(ctx) {
        this.#move();
        this.#changeDirection();
        ctx.drawImage(this.image,this.x, this.y, this.tileSize, this.tileSize);
      }
      #move() {
        if (
          !this.tileMap.didCollideWithEnvironment(
            this.x,
            this.y,
            this.movingDirection
          )
        ) {
          switch (this.movingDirection) {
            case MovingDirection.up:
              this.y -= this.velocity;
              break;
            case MovingDirection.down:
              this.y += this.velocity;
              break;
            case MovingDirection.left:
              this.x -= this.velocity;
              break;
            case MovingDirection.right:
              this.x += this.velocity;
              break;
          }
        }
      }
    
      #random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  #loadImages() {
    this.normalGhost = new Image();
    this.normalGhost.src = "images/ghost.png";

    this.scaredGhost = new Image();
    this.scaredGhost.src = "images/scaredGhost.png";

    this.scaredGhost2 = new Image();
    this.scaredGhost2.src = "images/scaredGhost2.png";

    this.image = this.normalGhost;
  }
  #changeDirection() {
    this.directionTimer--;
    let newMoveDirection = null;
    if (this.directionTimer == 0) {
      this.directionTimer = this.directionTimerDefault;
      newMoveDirection = Math.floor(
        Math.random() * Object.keys(MovingDirection).length
      );
    }
    if (newMoveDirection != null && this.movingDirection != newMoveDirection) {
        if (
          Number.isInteger(this.x / this.tileSize) &&
          Number.isInteger(this.y / this.tileSize)
        ) {
          if (
            !this.tileMap.didCollideWithEnvironment(
              this.x,
              this.y,
              newMoveDirection
            )
          ) {
            this.movingDirection = newMoveDirection;
          }
        }
      }
}}
