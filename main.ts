bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    rContent = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (rContent) {
        rContent = rContent.trim()
    }
    if (isBluetoothConnected && rContent) {
        basic.showString(rContent)
        basic.showNumber(rContent.length)
        basic.pause(2000)
        bluetooth.uartWriteString("OK")
    } else {
        bluetooth.uartWriteString("No Data")
    }
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
bluetooth.onBluetoothConnected(function () {
    isBluetoothConnected = true
    bluetooth.uartWriteString("connection succeeded")
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    isPressedButtonB = false
    pins.digitalWritePin(DigitalPin.P14, 0)
    bluetooth.uartWriteString("IR ))) send close")
    if (isBluetoothConnected) {
        isPressedButtonA = true
        bluetooth.uartWriteString("IR ((( receive open")
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    isPressedButtonA = false
    pins.digitalWritePin(DigitalPin.P15, 0)
    bluetooth.uartWriteString("IR ((( receive close")
    if (isBluetoothConnected) {
        isPressedButtonB = true
        bluetooth.uartWriteString("IR ))) send open")
    }
    pins.digitalWritePin(DigitalPin.P14, 1)
})
// 接收红外信号
pins.onPulsed(DigitalPin.P15, PulseValue.High, function () {
	
})
// 发送红外信号
pins.onPulsed(DigitalPin.P14, PulseValue.High, function () {
	
})
let isBluetoothConnected = false
let isPressedButtonA = false
let isPressedButtonB = false
let rContent = ""
let IRData = [] as Array<any>
isPressedButtonB = false
isPressedButtonA = false
rContent = ""
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.showIcon(IconNames.Heart)
