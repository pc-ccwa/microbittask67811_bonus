let f = 0
let time_interval = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    f = input.temperature() * 1.8 + 32
    if (f >= 99.7) {
        led.setBrightness(input.lightLevel())
        if (input.soundLevel() < 90) {
            time_interval = 1000
        } else if (input.soundLevel() < 180) {
            time_interval = 500
        } else {
            time_interval = 100
        }
        if (input.compassHeading() >= 0 && input.compassHeading() <= 180) {
            basic.showIcon(IconNames.Heart)
            basic.pause(time_interval)
            basic.showIcon(IconNames.SmallHeart)
        } else {
            basic.showIcon(IconNames.Happy)
            basic.pause(time_interval)
            basic.showIcon(IconNames.Sad)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
