let strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    if (smarthome.ReadNoise(AnalogPin.P1) > 0) {
    	
    }
})
