let text_list: string[] = []
input.onButtonPressed(Button.A, function () {
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(370, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Double))
    text_list = ["GRYFFINDOR!", "HUFFLEPUFF!", "SLYTHERIN!", "RAVENCLAW!"]
    basic.showString(text_list[Math.randomRange(0, 3)])
})
