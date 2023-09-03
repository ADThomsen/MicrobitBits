let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
let showColor = function(color: NeoPixelColors) {
    strip.showColor(neopixel.colors(color))
    basic.pause(1000)
}
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    if (smarthome.ReadNoise(AnalogPin.P1) > 40) {
        if (smarthome.ReadNoise(AnalogPin.P1) > 50) {
            if (smarthome.ReadNoise(AnalogPin.P1) > 60) {
                if (smarthome.ReadNoise(AnalogPin.P1) > 70) {
                    if (smarthome.ReadNoise(AnalogPin.P1) > 80) {
                        showColor(NeoPixelColors.Red)
                    } else {
                        showColor(NeoPixelColors.Orange)
                    }
                } else {
                    showColor(NeoPixelColors.Blue)
                }
            } else {
                showColor(NeoPixelColors.Yellow)
            }
        } else {
            showColor(NeoPixelColors.Green)
        }
    }
})
