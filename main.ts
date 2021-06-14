input.onButtonPressed(Button.A, function () {
    basic.showString("3")
    basic.showString("2")
    basic.showString("1")
    basic.showString("Go")
})
input.onButtonPressed(Button.B, function () {
    bitbot.goms(BBDirection.Forward, 50, 1000)
    bitbot.rotatems(BBRobotDirection.Left, 60, 310)
    bitbot.goms(BBDirection.Forward, 50, 1000)
    bitbot.rotatems(BBRobotDirection.Left, 60, 310)
    bitbot.goms(BBDirection.Forward, 50, 1000)
    bitbot.rotatems(BBRobotDirection.Left, 60, 310)
    bitbot.goms(BBDirection.Forward, 50, 1000)
    bitbot.ledRainbow()
})
basic.showString("Press A to start")
basic.showString("Press B to Race")
basic.forever(function () {
	
})
