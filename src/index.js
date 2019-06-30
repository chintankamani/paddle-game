import Game from "/src/game";

let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 400;
const GAME_HEIGHT = 200;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = lastTime - timeStamp;

  lastTime = timeStamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
