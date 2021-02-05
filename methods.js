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



// The Number.isNaN function is a standard JavaScript function that returns true only if the argument it is given is NaN. The Number function happens to return NaN when you give it a string that doesn’t represent a valid number. Thus, the condition translates to “unless theNumber is not-a-number, do this”.

    // more Number.isNaN examples for reference

    let test1 = 12

    if (isNaN(test1)){
    console.log('yes')
    } else console.log('no')
    // → no
    
    
    let test2 = NaN
    
    if (!isNaN(test2)){
    console.log('yes')
    } else console.log('no')
    // → yes
    
    
    let test3 = 12
    
    if (!Number.isNaN(test3)){
    console.log('yes')
    } else console.log('no')
    // → yes
    
    
    
    function typeOfNaN(x) {
    if (Number.isNaN(x)) {
        return 'Number NaN';
    }
    if (isNaN(x)) {
        return 'NaN';
    } else return x
    }
    
    console.log(typeOfNaN('100F'));
    // → "NaN"
    
    console.log(typeOfNaN(NaN));
    // → "Number NaN"
    
    console.log(typeOfNaN(12));
    // → "12"