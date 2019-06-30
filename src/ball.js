import { detectCollision } from "./collisiondetection";

export default class Ball {
  constructor(game) {
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.game = game;

    this.image = document.getElementById("img_ball");

    this.reset();
    this.size = 15;
  }

  reset() {
    this.position = { x: 150, y: 100 };
    this.speed = { x: 2, y: 2 };
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    //ball movement
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //wall on left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    // wall on top
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    //wall on bottom
    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }
    // check collision
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
