basic.forever(function() {
  music.playTone(147, music.beat(BeatFraction.Whole));
  basic.pause(100);
  music.playTone(165, music.beat(BeatFraction.Whole));
  basic.pause(100);
  music.playTone(175, music.beat(BeatFraction.Whole));
  basic.pause(100);
});
