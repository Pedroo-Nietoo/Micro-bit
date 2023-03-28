basic.showString("Love Meter")
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(randint(0, 100));
})
