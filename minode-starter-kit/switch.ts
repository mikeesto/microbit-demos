minode.onSwitchEvent(
  ConnName.D12,
  SwitchEvent.MINODE_SWITCH_EVT_OPEN,
  function() {
    basic.showString("OPEN");
    basic.pause(100);
  }
);

minode.onSwitchEvent(
  ConnName.D12,
  SwitchEvent.MINODE_SWITCH_EVT_CLOSE,
  function() {
    basic.showString("CLOSED");
    basic.pause(100);
  }
);
