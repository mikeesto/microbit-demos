input.onButtonPressed(Button.A, function () {
  for (let index = 0; index <= Math.randomRange(5, 15); index++) {
      led.plot(1, 2)
      basic.pause(200)
      basic.clearScreen()
      led.plot(2, 3)
      basic.pause(200)
      basic.clearScreen()
      led.plot(3, 2)
      basic.pause(200)
      basic.clearScreen()
      led.plot(2, 1)
      basic.pause(200)
      basic.clearScreen()
  }
  music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
  basic.showIcon(IconNames.Heart)
})
