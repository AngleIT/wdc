bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    rContent = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (isBluetoothConnected && (rContent && rContent.trim().length > 0)) {
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
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    if (isBluetoothConnected) {
    	
    }
})
let isBluetoothConnected = false
let rContent = ""
isBluetoothConnected = false
basic.showIcon(IconNames.Heart)
