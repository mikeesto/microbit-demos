let pirflag = 0;
minode.onPIREvent(ConnName.A0, function() {
  pirflag = 1;
});

pirflag = 0;
basic.forever(function() {
  if (pirflag == 1 || minode.PIRIsTriggered(ConnName.A0)) {
    basic.showIcon(IconNames.Yes);
    pirflag = 0;
  } else {
    basic.clearScreen();
  }
});
