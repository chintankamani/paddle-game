export function detectCollision(ball, gameObject) {
  // check collision
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfObject = gameObject.position.y;
  let leftsideOfObject = gameObject.position.x;
  let rightsideOfObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  let ballpos = ball.position.x;
  let ballsize = ball.size;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftsideOfObject &&
    rightsideOfObject >= ballpos + ballsize
  ) {
    return true;
  } else {
    return false;
  }
}
