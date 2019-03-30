input.onButtonPressed(Button.A, function() {
  basic.showNumber(
    minode.DHTGetTemperature(ConnName.D12, DHTTemStyle.MINODE_DHT_CELSIUS)
  );
});

input.onButtonPressed(Button.B, function() {
  basic.showNumber(minode.DHTGetHumidity(ConnName.D12));
});
