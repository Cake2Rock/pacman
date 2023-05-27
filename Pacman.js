export default class Pacman {
    constructor(x, y, tileSize, velocity, tileMap) {
      this.x = x;
      this.y = y;
      this.tileSize = tileSize;
      this.velocity = velocity;
      this.tileMap = tileMap;
    }
    draw(ctx) {}

    #loadPacmanImages() {
        const pacmanImage1 = new Image();
        pacmanImage1.src = "img/pac0.png";
    
        const pacmanImage2 = new Image();
        pacmanImage2.src = "img/pac1.png";
    
        const pacmanImage3 = new Image();
        pacmanImage3.src = "img/pac2.png";
    
        const pacmanImage4 = new Image();
        pacmanImage4.src = "img/pac1.png";
    
        this.pacmanImages = [
          pacmanImage1,
          pacmanImage2,
          pacmanImage3,
          pacmanImage4,
        ];
    