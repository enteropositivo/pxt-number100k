//% color="#4495FB" block="Basic"
namespace distintiva {
    let actual = 0
    let pos = 0
    let n = 0
    
    //% block
    //% num.min=0 num.max=99999
    export function number100k(num: number) {
        basic.clearScreen()
        actual = num
        pos = 1
        while (actual > 0) {
            n = actual % 10
            actual = Math.floor(actual / 10)
            if (n > 5) {
                led.plot(5 - pos, 0)
                n = n - 5
            }
            led.plot(5 - pos, 5 - n)
            pos += 1
        }
    }
}

