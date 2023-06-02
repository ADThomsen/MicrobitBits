function displaySequence () {
    for (let value of sequence) {
        basic.showString("" + (value))
        basic.showString("")
    }
}
input.onButtonPressed(Button.A, function () {
    if (isListening) {
        userGuess = "" + userGuess + "A"
        serial.writeLine(userGuess)
        checkUserGuess()
    }
})
function checkUserGuess () {
    if (sequence.indexOf(userGuess) == -1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(5000)
        control.reset()
    } else if (sequence == userGuess) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(1200)
        simonSays()
    }
}
function addToSequence () {
    if (Math.randomBoolean()) {
        sequence = "" + sequence + "A"
    } else {
        sequence = "" + sequence + "B"
    }
    serial.writeLine(sequence)
}
input.onButtonPressed(Button.B, function () {
    if (isListening) {
        userGuess = "" + userGuess + "B"
        serial.writeLine(userGuess)
        checkUserGuess()
    }
})
function simonSays () {
    isListening = false
    addToSequence()
    displaySequence()
    userGuess = ""
    isListening = true
}
let isListening = false
let userGuess = ""
let sequence = ""
sequence = ""
userGuess = ""
isListening = false
simonSays()
basic.forever(function () {
	
})
