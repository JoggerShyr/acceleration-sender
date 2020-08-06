basic.showString("Sender")
radio.setGroup(8)
// Reference Youtube Video: https://www.youtube.com/watch?v=m9ntqxh8FvQ
basic.forever(function () {
    radio.sendNumber(input.temperature())
    led.toggle(2, 2)
    basic.pause(1000)
})
