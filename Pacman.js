import MovingDirection from "./MovingDirection.js";


export default class Pacman {
    constructor(x, y, tileSize, velocity, tileMap) {
      this.x = x;
      this.y = y;
      this.tileSize = tileSize;
      this.velocity = velocity;
      this.tileMap = tileMap;

      this.currentMovingDirection = null;
      this.requestedMovingDirection = null;

      document.addEventListener("keydown", this.#keydown);

      this.#loadPacmanImages();
    }
    draw(ctx) {
      
        ctx.drawImage(this.pacmanImageIndex[this.pacmanImageIndex],this.x, this.y,this.tileSize,this.tileSize)

    }

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
          pacmanImage2,
        ];
        this.pacmanImageIndex = 0;
    }
    #keydown = (event) => {
        //up movement
        if (event.keyCode == 38) {
          if (this.currentMovingDirection == MovingDirection.down)
            this.currentMovingDirection = MovingDirection.up;
          this.requestedMovingDirection = MovingDirection.up;
          this.madeFirstMove = true;
        }
        //down movement
        if (event.keyCode == 40) {
          if (this.currentMovingDirection == MovingDirection.up)
            this.currentMovingDirection = MovingDirection.down;
          this.requestedMovingDirection = MovingDirection.down;
          this.madeFirstMove = true;
        }
        //left movement
        if (event.keyCode == 37) {
          if (this.currentMovingDirection == MovingDirection.right)
            this.currentMovingDirection = MovingDirection.left;
          this.requestedMovingDirection = MovingDirection.left;
          this.madeFirstMove = true;
        }
        //right movement
        if (event.keyCode == 39) {
          if (this.currentMovingDirection == MovingDirection.left)
            this.currentMovingDirection = MovingDirection.right;
          this.requestedMovingDirection = MovingDirection.right;
          this.madeFirstMove = true;
        }
      };

  }
