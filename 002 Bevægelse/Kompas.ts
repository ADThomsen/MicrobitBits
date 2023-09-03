input.onButtonPressed(Button.A, function () {
    basic.pause(5000)
    startHeading = input.compassHeading()
    isArmed = true
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    isArmed = false
})
let offset = 0
let currentHeading = 0
let isArmed = false
let startHeading = 0
startHeading = input.compassHeading()
isArmed = false
basic.forever(function () {
    if (isArmed) {
        currentHeading = input.compassHeading()
        offset = startHeading - currentHeading
        if (offset < -50 || 50 < offset) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.UntilDone)
        }
    }
})
