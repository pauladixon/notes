

// operators
// - modulus (%)
// - typeof
        console.log(typeof 4.5)
        // → number
        console.log(typeof "x")
        // → string

// The other operators shown all operated on two values, but typeof takes only one. Operators that use two values are called binary operators, while those that take one are called unary operators. The minus operator can be used both as a binary operator and as a unary operator.

        console.log(- (10 - 2))
        // → -8


// There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).

    console.log(NaN == NaN)
    // → false


// operating on three values. It is written with a question mark and a colon, like this:

    console.log(true ? 1 : 2);
    // → 1
    console.log(false ? 1 : 2);
    // → 2

    // This one is called the conditional operator (or sometimes just the ternary operator since it is the only such operator in the language). The value on the left of the question mark “picks” which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the value on the right.



// short circuiting of logical operators

    // The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect when the values are Boolean and does something analogous for values of other types.

    console.log(null || "user")
    // → user
    console.log("Agnes" || "user")
    // → Agnes

    // We can use this functionality as a way to fall back on a default value. If you have a value that might be empty, you can put || after it with a replacement value. If the initial value can be converted to false, you’ll get the replacement instead. The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true. So 0 || -1 produces -1, and "" || "!?" yields "!?".


// comma separation in bindings

    // A single let statement may define multiple bindings. The definitions must be separated by commas.

    let one = 1, two = 2;
    console.log(one + two);
    // → 3


// math max function

    // the function Math.max takes any amount of number arguments and gives back the greatest.

    console.log(Math.max(2, 4));
    // → 4


// math min function 

    // Here a call to Math.min, which is the opposite of Math.max, is used as part of a plus expression:

    console.log(Math.min(2, 4) + 100);
    // → 102


// control flow example 

    // In the simple case, we want some code to be executed if, and only if, a certain condition holds. We might, for example, want to show the square of the input only if the input is actually a number.

    let theNumber = Number(prompt("Pick a number"));
    if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
                theNumber * theNumber);
    }

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