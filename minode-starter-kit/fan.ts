let speed = 0;
input.onButtonPressed(Button.A, function() {
  speed = speed + 10;
  if (speed > 100) {
    speed = 100;
  }
});

input.onButtonPressed(Button.B, function() {
  speed = speed - 10;
  if (speed < 0) {
    speed = 0;
  }
});

speed = 10;
basic.forever(function() {
  minode.FanControl_1(AnalogConnName.Analog_A0, speed);
  basic.pause(100);
});
