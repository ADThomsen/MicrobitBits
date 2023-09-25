input.onButtonPressed(Button.A, function () {
    radio.sendString("hint")
})
radio.onReceivedString(function (receivedString) {
})
radio.setGroup(1)
OLED.init(128, 64)
