input.onButtonPressed(Button.A, function () {
    radio.sendString("Button A")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Button B")
})
radio.setGroup(1)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
soundExpression.giggle.playUntilDone()
basic.showString("Hello!")
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("Up")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("Down")
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendString("LEDL")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("LEDR")
    } else {
        if (pins.analogReadPin(AnalogPin.P2) > 550 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
            radio.sendValue("F", pins.analogReadPin(AnalogPin.P2))
        } else if (pins.analogReadPin(AnalogPin.P2) < 450 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
            radio.sendValue("B", pins.analogReadPin(AnalogPin.P2))
        } else if (pins.analogReadPin(AnalogPin.P1) < 450 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
            radio.sendValue("L", pins.analogReadPin(AnalogPin.P1))
        } else if (pins.analogReadPin(AnalogPin.P1) > 550 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
            radio.sendValue("R", pins.analogReadPin(AnalogPin.P1))
        } else {
            radio.sendString("S")
        }
    }
})
