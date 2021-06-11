def on_button_pressed_a():
    basic.show_string("3")
    basic.show_string("2")
    basic.show_string("1")
    basic.show_string("Go")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for index in range(4):
        bitbot.set_led_color(0xFF0000)
        bitbot.goms(BBDirection.FORWARD, 60, 400)
        bitbot.rotatems(BBRobotDirection.LEFT, 100, 280)
    bitbot.led_rainbow()
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_string("Press A to start")
basic.show_string("Press B to Race")

def on_forever():
    pass
basic.forever(on_forever)
