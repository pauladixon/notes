

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


// looping control flow with while

    let number = 0;
    while (number <= 12) {
    console.log(number);
    number = number + 2;
    }
    // → 0
    // → 2
    //   … etcetera

    // For a program that calculates and shows the value of 2 to the 10th power, we use two bindings: one to keep track of our result and one to count how often we have multiplied this result by 2. The loop tests whether the second binding has reached 10 yet and, if not, updates both bindings.

    let result = 1;
    let counter = 0;
    while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
    }
    console.log(result);
    // → 1024


// control flow with do loops

    // A do loop is a control structure similar to a while loop. It differs only on one point: a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution. To reflect this, the test appears after the body of the loop.

    let yourName;
    do {
    yourName = prompt("Who are you?");
    } while (!yourName);
    console.log(yourName);

    // This program will force you to enter a name. It will ask again and again until it gets something that is not an empty string. Applying the ! operator will convert a value to Boolean type before negating it, and all strings except "" convert to true. This means the loop continues going round until you provide a non-empty name.


// control flow with if loops

    // This is the code that computes 210 using for instead of while:

    let result = 1;
    for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
    }
    console.log(result);
    // → 1024


// illustration of break with for and if

    for (let current = 20; ; current = current + 1) {
        if (current % 7 == 0) {
        console.log(current);
        break;
        }
    }
    // → 21

    // The for construct in the example does not have a part that checks for the end of the loop. This means that the loop will never stop unless the break statement inside is executed.


// note on continue

    // The continue keyword is similar to break, in that it influences the progress of a loop. When continue is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration.


// switch cases vs else if

    // It is not uncommon for code to look like this:

    if (x == "value1") action1();
    else if (x == "value2") action2();
    else if (x == "value3") action3();
    else defaultAction();

    // There is a construct called switch that is intended to express such a “dispatch” in a more direct way. Unfortunately, the syntax JavaScript uses for this (which it inherited from the C/Java line of programming languages) is somewhat awkward—a chain of if statements may look better. Here is an example:

    switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
    }


// function examples

    // 2 to the power of 10 -- you don't have to do anything with the variable count while it's looping

    const power = function(base, exponent) {
        let result = 1;
        for (let count = 0; count < exponent; count++) {
            result *= base;
        }
        return result;
    };
    
    console.log(power(2, 10));
    // → 1024

    // A return keyword without an expression after it will cause the function to return undefined.


// nested scope and bindings

    const hummus = function(factor) {
        const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
        };
        ingredient(1, "can", "chickpeas");
        ingredient(0.25, "cup", "tahini");
        ingredient(0.25, "cup", "lemon juice");
        ingredient(1, "clove", "garlic");
        ingredient(2, "tablespoon", "olive oil");
        ingredient(0.5, "teaspoon", "cumin");
    };

    //   The code inside the ingredient function can see the factor binding from the outer function. But its local bindings, such as unit or ingredientAmount, are not visible in the outer function.

    // Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.

    // A binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value, like so:

    let launchMissiles = function() {
        missileSystem.launch("now");
    };
    if (safeMode) {
        launchMissiles = function() {/* do nothing */};
    }

    // This does not work with function declarations however. Also declaration notation allows flow that is not top-to-bottom whereas binding notation requires top-to-bottom. Example:

    console.log("The future says:", future());

    function future() {
        return "You'll never have flying cars";
    }

    // They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offers the freedom to order code in a way that seems meaningful, without worrying about having to define all functions before they are used.


// arrow functions

    // the power of function translated to arrow function:

    const power = (base, exponent) => {
        let result = 1;
        for (let count = 0; count < exponent; count++) {
          result *= base;
        }
        return result;
    };

    // and the following produce the same function:

    const square1 = (x) => { return x * x; };
    const square2 = x => x * x;


// notes on call stacks

    // The place where the computer stores the context of functions is the call stack. Every time a function is called, the current context is stored on top of this stack.

    // Storing this stack requires space in the computer’s memory. When the stack grows too big, the computer will fail with a message like “out of stack space” or “too much recursion”. The following code illustrates this by asking the computer a really hard question that causes an infinite back-and-forth between two functions. Rather, it would be infinite, if the computer had an infinite stack. As it is, we will run out of space, or “blow the stack”.

    function chicken() {
        return egg();
    }
    function egg() {
        return chicken();
    }
    console.log(chicken() + " came first.");
    // → ??


// optional arguments

    // The following code is allowed and executes without any problem:

    function square(x) { return x * x; }
    console.log(square(4, true, "hedgehog"));
    // → 16

    // We defined square with only one parameter. Yet when we call it with three, the language doesn’t complain. It ignores the extra arguments and computes the square of the first one.