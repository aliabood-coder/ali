input.onButtonPressed(Button.A, function () {
    state += 1
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        number_1 += 1
        basic.showNumber(1)
    }
})
let state = 0
music.setVolume(127)
let number_1 = 0
let number_2 = 0
basic.forever(function () {
    radio.setGroup(1)
})
