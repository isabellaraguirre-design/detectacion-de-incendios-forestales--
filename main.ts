let humedad = 0
let luz = 0
let temp = 0
radio.setGroup(1)
basic.showString("Activo")
basic.forever(function () {
    temp = input.temperature()
    luz = input.lightLevel()
    humedad = pins.analogReadPin(AnalogPin.P0)
    if (temp > 35 || (luz > 200 || humedad > 100)) {
        basic.showIcon(IconNames.Tortoise)
        radio.sendString("Alerta")
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
