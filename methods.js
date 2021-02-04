// stringify

    let prac = 531

    let stringPrac = String(prac)

    if (prac === stringPrac){
    console.log(true)
    } else console.log(false)

    // => false

    function zeroPad(number, width) {
        let string = String(number);
        while (string.length < width) {
          string = "0" + string;
        }
        return string;
    }

    zeroPad(4, 9)
    // => 000000009

    // stringifies and pads a number with zeroes.



