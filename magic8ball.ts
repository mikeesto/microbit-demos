let answer = 0;
input.onGesture(Gesture.Shake, function() {
  answer = Math.randomRange(0, 3);
  if (answer == 0) {
    basic.showString("NO!");
  } else if (answer == 1) {
    basic.showString("PROBABLY!");
  } else if (answer == 2) {
    basic.showString("UNLIKELY!");
  } else if (answer == 3) {
    basic.showString("YES!");
  }
});
basic.showString("Ask a question and shake");
