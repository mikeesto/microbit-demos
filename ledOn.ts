// toggle nose
input.onButtonPressed(Button.A, function () {
  led.toggle(2, 2)
})

// :)
basic.forever(function () {
  // eyes
  led.plot(1, 0)
  led.plot(1, 1)
  led.plot(3, 0)
  led.plot(3, 1)
  // mouth
  led.plot(0, 3)
  led.plot(1, 4)
  led.plot(2, 4)
  led.plot(3, 4)
  led.plot(4, 3)
})
