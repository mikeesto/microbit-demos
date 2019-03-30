basic.forever(function() {
  basic.showNumber(minode.LightSensorGetLevel(AnalogConnName.Analog_A0));
  basic.pause(100);
});
