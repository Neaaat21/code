input.onGesture(Gesture.Shake, function () {
    egg_boy_need_steps += 1
})
let egg_boy_need_steps = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1500) {
        egg_boy_need_steps += 1
        basic.showNumber(egg_boy_need_steps)
    }
})
basic.forever(function () {
    basic.showNumber(egg_boy_need_steps)
    if (egg_boy_need_steps == 20000) {
        basic.showString("are you saitama yet")
        music.playMelody("C5 G B A F A C5 B ", 120)
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . # # # .
            # . . . #
            `)
    } else if (egg_boy_need_steps >= 20000) {
        basic.showIcon(IconNames.Silly)
    }
})
