input.onButtonPressed(Button.A, function () {
    basic.pause(5000)
    startHeading = input.compassHeading()
    isArmed = true
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    isArmed = false
})
let isArmed = false
let startHeading = 0
startHeading = input.compassHeading()
isArmed = false
basic.forever(function () {
	
})
