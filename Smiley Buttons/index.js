input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})

input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Silly)
    basic.showIcon(IconNames.Surprised)
})
