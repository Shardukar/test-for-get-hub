input.onButtonPressed(Button.A, function () {
    basic.showString("3")
    basic.showString("2")
    basic.showString("1")
    basic.showString("Go")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        bitbot.setLedColor(0xFF0000)
        bitbot.goms(BBDirection.Forward, 60, 400)
        bitbot.rotatems(BBRobotDirection.Left, 100, 280)
    }
    bitbot.ledRainbow()
})
basic.showString("Press A to start")
basic.showString("Press B to Race")
basic.forever(function () {
	
})
