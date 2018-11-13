let steps = 0
input.onGesture(Gesture.Shake, function () {
    steps += 1
})

input.onButtonPressed(Button.AB, function () {
    steps = 0
})

basic.forever(function () {
    basic.showNumber(steps)
    basic.pause(200)
})
