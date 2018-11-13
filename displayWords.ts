input.onGesture(Gesture.Shake, function () {
  basic.showIcon(IconNames.House)
})

input.onButtonPressed(Button.AB, function () {
  basic.showString("I am")
  basic.showNumber(9)
})

basic.showString("Hello!")
