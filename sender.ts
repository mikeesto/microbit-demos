input.onButtonPressed(Button.A, function () {
  radio.sendString("Boo!")
})

input.onButtonPressed(Button.B, function () {
  radio.sendString("How are you?")
})

radio.setGroup(1)
