
// function examples

    // 2 to the power of 10 -- you don't have to do anything with the variable count while it's looping

    const power = function(base, exponent) {
        let result = 1
        for (let count = 0; count < exponent; count++) {
            result *= base
        }
        return result
    }
    
    console.log(power(2, 10))
    // → 1024

    // A return keyword without an expression after it will cause the function to return undefined.


// nested scope and bindings

    const hummus = function(factor) {
        const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor
        if (ingredientAmount > 1) {
            unit += "s"
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
        }
        ingredient(1, "can", "chickpeas")
        ingredient(0.25, "cup", "tahini")
        ingredient(0.25, "cup", "lemon juice")
        ingredient(1, "clove", "garlic")
        ingredient(2, "tablespoon", "olive oil")
        ingredient(0.5, "teaspoon", "cumin")
    }

    //   The code inside the ingredient function can see the factor binding from the outer function. But its local bindings, such as unit or ingredientAmount, are not visible in the outer function.

    // Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.

    // A binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value, like so:

    let launchMissiles = function() {
        missileSystem.launch("now")
    }
    if (safeMode) {
        launchMissiles = function() {/* do nothing */}
    }

    // This does not work with function declarations however. Also declaration notation allows flow that is not top-to-bottom whereas binding notation requires top-to-bottom. Example:

    console.log("The future says:", future())

    function future() {
        return "You'll never have flying cars"
    }

    // They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offers the freedom to order code in a way that seems meaningful, without worrying about having to define all functions before they are used.


// arrow functions

    // the power of function translated to arrow function:

    const power = (base, exponent) => {
        let result = 1
        for (let count = 0; count < exponent; count++) {
          result *= base
        }
        return result
    }

    // and the following produce the same function:

    const square1 = (x) => { return x * x; }
    const square2 = x => x * x

    // looking at differences between:

        // The function keyword, when used as an expression, can create a function value. When used as a statement, it can be used to declare a binding and give it a function as its value. Arrow functions are yet another way to create functions.

        // Define f to hold a function value
            const f = function(a) {
                console.log(a + 2)
            }
          
        // Declare g to be a function
            function g(a, b) {
                return a * b * 3.5
            }
          
        // A less verbose function value
            let h = a => a % 3

    
    // more examples

        const username = 'john'

        const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`; 
        
        console.log(capitalize(username))
    


// notes on call stacks

    // The place where the computer stores the context of functions is the call stack. Every time a function is called, the current context is stored on top of this stack.

    // Storing this stack requires space in the computer’s memory. When the stack grows too big, the computer will fail with a message like “out of stack space” or “too much recursion”. The following code illustrates this by asking the computer a really hard question that causes an infinite back-and-forth between two functions. Rather, it would be infinite, if the computer had an infinite stack. As it is, we will run out of space, or “blow the stack”.

    function chicken() {
        return egg()
    }
    function egg() {
        return chicken()
    }
    console.log(chicken() + " came first.")
    // → ??


// optional arguments

    // The following code is allowed and executes without any problem:

    function square(x) { return x * x; }
    console.log(square(4, true, "hedgehog"))
    // → 16

    // We defined square with only one parameter. Yet when we call it with three, the language doesn’t complain. It ignores the extra arguments and computes the square of the first one.

    // JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined.

    // The downside of this is that it is possible—likely, even—that you’ll accidentally pass the wrong number of arguments to functions. And no one will tell you about it.

    // The upside is that this behavior can be used to allow a function to be called with different numbers of arguments. For example, this minus function tries to imitate the - operator by acting on either one or two arguments:

    function minus(a, b) {
        if (b === undefined) return -a
        else return a - b
    }

    console.log(minus(10))
    // → -10
    console.log(minus(10, 5))
    // → 5


// default arguments

    // If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.

    // For example, this version of power makes its second argument optional. If you don’t provide it or pass the value undefined, it will default to two, and the function will behave like square.

        function power(base, exponent = 2) {
            let result = 1
            for (let count = 0; count < exponent; count++) {
                result *= base
            }
            return result
        }

        console.log(power(4))
        // → 16
        console.log(power(2, 6))
        // → 64

    // can limit the parameters inside a function to make sure results are within the scope desired, ie. significant digits

        function convertTemperature(celsius, decimalPlaces = 1) {
            // celsius to fahrenheit
            //   decimalPlaces = decimalPlaces || 1;
            const fahrenheit = celsius * 1.8 + 32;
            return Number(fahrenheit.toFixed(decimalPlaces))
        }
        
        console.log(convertTemperature(21, 0))


// recursion

    // It is perfectly okay for a function to call itself, as long as it doesn’t do it so often that it overflows the stack. A function that calls itself is called recursive.

    // Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?

    // For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

    // Here is a recursive solution:

        function findSolution(target) {
            function find(current, history) {
                if (current == target) {
                    return history
                } else if (current > target) {
                    return null
                } else {
                    return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`)
                }
            }
            return find(1, "1")
        }

        console.log(findSolution(24));
        // → (((1 * 3) + 5) * 3)

    // Note that this program doesn’t necessarily find the shortest sequence of operations. It is satisfied when it finds any sequence at all.


// function side effects 

    // A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global bindings whose value might change.

    // Still, there’s no need to feel bad when writing functions that are not pure or to wage a holy war to purge them from your code. Side effects are often useful. There’d be no way to write a pure version of console.log, for example, and console.log is good to have. Some operations are also easier to express in an efficient way when we use side effects, so computing speed can be a reason to avoid purity.


// closures

    // method for keeping a value connected to a function 

        function handleLikePost(step) {
            let likeCount = 0;
            return function addLike() {
                likeCount += step
                return likeCount
            }
            console.log('like count:', likeCount)
        }
        
        const doubleLike = handleLikePost(2)
        
        console.log(doubleLike())
        console.log(doubleLike())
        console.log(doubleLike())
        
        // 1) Closures are a property of JavaScript functions
        // 2) Call function in different scope than where function was original defined


        function countdown() {
            let number = 10
            return function removeNumber() {
                number --
                return number
            }
        }
          
        const countingDown = countdown()
        
        console.log(countingDown())
        console.log(countingDown())
        console.log(countingDown())
        


// callback functions

    const username = 'john'

    const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`
    
    function greetUser(name, callback) {
        return callback(capitalize(name))
    }

    const result = greetUser(username, name => `Hi there, ${name}!`)

    console.log(result)