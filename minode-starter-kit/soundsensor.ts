minode.onMICEvent(AnalogConnName.Analog_A0, function() {
  basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `);
  basic.pause(500);
  basic.clearScreen();
});
