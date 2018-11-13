basic.forever(function () {
  if (input.acceleration(Dimension.Strength) >= 3000) {
      if (input.acceleration(Dimension.Strength) <= 3300) {
          basic.showLeds(`
              . . . . .
              . . . . .
              . . . . .
              . # # # .
              . # # # .
              `)
          basic.pause(5000)
      }
      if (input.acceleration(Dimension.Strength) >= 3300 && input.acceleration(Dimension.Strength) <= 3450) {
          basic.showLeds(`
              . . . . .
              . . . . .
              . # # # .
              . # # # .
              . # # # .
              `)
          basic.pause(5000)
      }
      if (input.acceleration(Dimension.Strength) >= 3450 && input.acceleration(Dimension.Strength) <= 3600) {
          basic.showLeds(`
              . . . . .
              . # # # .
              . # # # .
              . # # # .
              . # # # .
              `)
          basic.pause(5000)
      }
      if (input.acceleration(Dimension.Strength) >= 3600) {
          basic.showLeds(`
              . # # # .
              . # # # .
              . # # # .
              . # # # .
              . # # # .
              `)
          basic.pause(5000)
      }
  }
})
