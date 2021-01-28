

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