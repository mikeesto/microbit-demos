let block4: game.LedSprite = null;
let block3: game.LedSprite = null;
let block2: game.LedSprite = null;
let block1: game.LedSprite = null;
let block0: game.LedSprite = null;
let gameOn = false;
let player: game.LedSprite = null;
let score = 0;
input.onButtonPressed(Button.A, function() {
  if (player.get(LedSpriteProperty.X) > 0) {
    player.change(LedSpriteProperty.X, -1);
  }
});
input.onButtonPressed(Button.B, function() {
  if (player.get(LedSpriteProperty.X) < 4) {
    player.change(LedSpriteProperty.X, 1);
  }
});
basic.forever(function() {
  score = 0;
  player = game.createSprite(2, 4);
  gameOn = true;
  while (gameOn == true) {
    basic.pause(100);
  }
  game.addScore(score);
  game.gameOver();
});
basic.forever(function() {
  basic.pause(100);
  if (gameOn == true) {
    block0 = game.createSprite(0, 0);
    basic.pause(Math.randomRange(0, 5000));
    while (gameOn == true) {
      if (block0.get(LedSpriteProperty.Y) == 4) {
        if (player.isTouching(block0)) {
          gameOn = false;
        } else {
          score = score + 1;
          block0.set(LedSpriteProperty.Y, 0);
          basic.pause(Math.randomRange(0, 5000));
        }
      } else {
        block0.change(LedSpriteProperty.Y, 1);
        basic.pause(500);
      }
    }
  }
});
basic.forever(function() {
  basic.pause(100);
  if (gameOn == true) {
    block1 = game.createSprite(1, 0);
    basic.pause(Math.randomRange(0, 5000));
    while (gameOn == true) {
      if (block1.get(LedSpriteProperty.Y) == 4) {
        if (player.isTouching(block1)) {
          gameOn = false;
        } else {
          score = score + 1;
          block1.set(LedSpriteProperty.Y, 0);
          basic.pause(Math.randomRange(0, 5000));
        }
      } else {
        block1.change(LedSpriteProperty.Y, 1);
        basic.pause(500);
      }
    }
  }
});
basic.forever(function() {
  basic.pause(100);
  if (gameOn == true) {
    block2 = game.createSprite(2, 0);
    basic.pause(Math.randomRange(0, 5000));
    while (gameOn == true) {
      if (block2.get(LedSpriteProperty.Y) == 4) {
        if (player.isTouching(block2)) {
          gameOn = false;
        } else {
          score = score + 1;
          block2.set(LedSpriteProperty.Y, 0);
          basic.pause(Math.randomRange(0, 5000));
        }
      } else {
        block2.change(LedSpriteProperty.Y, 1);
        basic.pause(500);
      }
    }
  }
});
basic.forever(function() {
  basic.pause(100);
  if (gameOn == true) {
    block3 = game.createSprite(3, 0);
    basic.pause(Math.randomRange(0, 5000));
    while (gameOn == true) {
      if (block3.get(LedSpriteProperty.Y) == 4) {
        if (player.isTouching(block3)) {
          gameOn = false;
        } else {
          score = score + 1;
          block3.set(LedSpriteProperty.Y, 0);
          basic.pause(Math.randomRange(0, 5000));
        }
      } else {
        block3.change(LedSpriteProperty.Y, 1);
        basic.pause(500);
      }
    }
  }
});
basic.forever(function() {
  basic.pause(100);
  if (gameOn == true) {
    block4 = game.createSprite(4, 0);
    basic.pause(Math.randomRange(0, 5000));
    while (gameOn == true) {
      if (block4.get(LedSpriteProperty.Y) == 4) {
        if (player.isTouching(block4)) {
          gameOn = false;
        } else {
          score = score + 1;
          block4.set(LedSpriteProperty.Y, 0);
          basic.pause(Math.randomRange(0, 5000));
        }
      } else {
        block4.change(LedSpriteProperty.Y, 1);
        basic.pause(500);
      }
    }
  }
});
