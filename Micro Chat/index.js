// radio.setGroup(123)

input.onButtonPressed(Button.A, function () {
    radio.sendString(":)")
})

radio.onReceivedString(function (recievedString) {
    basic.showString(recievedString)
})
