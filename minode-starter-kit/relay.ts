input.onButtonPressed(Button.A, function() {
  minode.RelayControl(ConnName.D12, FanStatus.MINODE_FAN_OPEN);
});

input.onButtonPressed(Button.B, function() {
  minode.RelayControl(ConnName.D12, FanStatus.MINODE_FAN_CLOSE);
});
