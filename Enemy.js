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
      draw(ctx) {}
  #loadImages() {
    this.normalGhost = new Image();
    this.normalGhost.src = "images/ghost.png";

    this.scaredGhost = new Image();
    this.scaredGhost.src = "images/scaredGhost.png";

    this.scaredGhost2 = new Image();
    this.scaredGhost2.src = "images/scaredGhost2.png";

    this.image = this.normalGhost;
  }
}
