// stringify

    let prac = 531

    let stringPrac = String(prac)

    if (prac === stringPrac){
        console.log(true)
    } else console.log(false)

    // => false

    function zeroPad(number, width) {
        let string = String(number)
        while (string.length < width) {
            string = "0" + string
        }
        return string
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
            return 'Number NaN'
        }
        if (isNaN(x)) {
            return 'NaN'
        } else return x
    }
    
    console.log(typeOfNaN('100F'))
    // → "NaN"
    
    console.log(typeOfNaN(NaN))
    // → "Number NaN"
    
    console.log(typeOfNaN(12))
    // → "12"


// math max function

    // the function Math.max takes any amount of number arguments and gives back the greatest.

    console.log(Math.max(2, 4))
    // → 4


// math min function 

    // Here a call to Math.min, which is the opposite of Math.max, is used as part of a plus expression:

    console.log(Math.min(2, 4) + 100)
    // → 102


// typeof / uppercase / lowercase methods

    // Both string and array values contain, in addition to the length property, a number of properties that hold function values.

    let doh = "Doh"
    console.log(typeof doh.toUpperCase)
    // → function
    console.log(doh.toUpperCase())
    // → DOH


// push and pop

    let sequence = [1, 2, 3]
    sequence.push(4)
    sequence.push(5)
    console.log(sequence)
    // → [1, 2, 3, 4, 5]
    console.log(sequence.pop())
    // → 5
    console.log(sequence)
    // → [1, 2, 3, 4]

    // The push method adds values to the end of an array, and the pop method does the opposite, removing the last value in the array and returning it.

    // These names are the traditional terms for operations on a stack. A stack, in programming, is a data structure that allows you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first. These are common in programming—you might remember the function call stack from the previous chapter, which is an instance of the same idea.


// shift and unshift

    // The corresponding methods for adding and removing things at the start of an array are called unshift and shift.

    let todoList = []
    function remember(task) {
        todoList.push(task)
    }
    function getTask() {
        return todoList.shift()
    }
    function rememberUrgently(task) {
        todoList.unshift(task)
    }


// indexOf

    // To search for a specific value, arrays provide an indexOf method. The method searches through the array from the start to the end and returns the index at which the requested value was found—or -1 if it wasn’t found. To search from the end instead of the start, there’s a similar method called lastIndexOf.

    console.log([1, 2, 3, 2, 1].indexOf(2))
    // → 1
    console.log([1, 2, 3, 2, 1].lastIndexOf(2))
    // → 3

    // Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching.


// slice

    // Another fundamental array method is slice, which takes start and end indices and returns an array that has only the elements between them. The start index is inclusive, the end index exclusive.

    console.log([0, 1, 2, 3, 4].slice(2, 4))
    // → [2, 3]
    console.log([0, 1, 2, 3, 4].slice(2))
    // → [2, 3, 4]

    // When the end index is not given, slice will take all of the elements after the start index. You can also omit the start index to copy the entire array.


// concat

    // The concat method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.

    // The following example shows both concat and slice in action. It takes an array and an index, and it returns a new array that is a copy of the original array with the element at the given index removed.

    function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1))
    }
    console.log(remove(["a", "b", "c", "d", "e"], 2))
    // → ["a", "b", "d", "e"]

    // If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.


// string methods
        
    console.log("coconuts".slice(4, 7))
    // → nut
    console.log("coconut".indexOf("u"))
    // → 5
    
    // One difference is that a string’s indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element.

    console.log("one two three".indexOf("ee"))
    // → 11

    // The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

    console.log("  okay \n ".trim())
    // → okay


    // You can split a string on every occurrence of another string with split and join it again with join.

    let sentence = "Secretarybirds specialize in stomping"
    let words = sentence.split(" ")
    console.log(words)
    // → ["Secretarybirds", "specialize", "in", "stomping"]
    console.log(words.join(". "))
    // → Secretarybirds. specialize. in. stomping

    // A string can be repeated with the repeat method, which creates a new string containing multiple copies of the original string, glued together.

    console.log("LA".repeat(3))
    // → LALALA

    // assessing strings:

    // We have already seen the string type’s length property. Accessing the individual characters in a string looks like accessing array elements (with a caveat that we’ll discuss in Chapter 5).

    let string = "abc"
    console.log(string.length)
    // → 3
    console.log(string[1])
    // → b


    // You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.


// rest parameters

    // Math.max computes the maximum of all the arguments it is given.

    // To write such a function, you put three dots before the function’s last parameter, like this:

    function max(...numbers) {
        let result = -Infinity
        for (let number of numbers) {
            if (number > result) result = number
        }
        return result
    }
    console.log(max(4, 1, 9, -2))
    // → 9

    // You can use a similar three-dot notation to call a function with an array of arguments.

    let numbers = [5, 1, 7]
    console.log(max(...numbers))
    // → 7

    let words = ["never", "fully"]
    console.log(["will", ...words, "understand"])
    // → ["will", "never", "fully", "understand"]


// the math object 

    // Back to the Math object. If you need to do trigonometry, Math can help. It contains cos (cosine), sin (sine), and tan (tangent), as well as their inverse functions, acos, asin, and atan, respectively. The number π (pi)—or at least the closest approximation that fits in a JavaScript number—is available as Math.PI. There is an old programming tradition of writing the names of constant values in all caps.

    function randomPointOnCircle(radius) {
        let angle = Math.random() * 2 * Math.PI
        return {x: radius * Math.cos(angle),
                y: radius * Math.sin(angle)}
    }
    console.log(randomPointOnCircle(2))
    // → {x: 0.3667, y: 1.966}

    // The previous example used Math.random. This is a function that returns a new pseudorandom number between zero (inclusive) and one (exclusive) every time you call it.

    console.log(Math.random())
    // → 0.36993729369714856
    console.log(Math.random())
    // → 0.727367032552138
    console.log(Math.random())
    // → 0.40180766698904335

    console.log(Math.floor(Math.random() * 10))
    // → 2

    // Multiplying the random number by 10 gives us a number greater than or equal to 0 and below 10. Since Math.floor rounds down, this expression will produce, with equal chance, any number from 0 through 9.

    // There are also the functions Math.ceil (for “ceiling”, which rounds up to a whole number), Math.round (to the nearest whole number), and Math.abs, which takes the absolute value of a number, meaning it negates negative values but leaves positive ones as they are.


// some & every method on arrays

    // both take a callback function

        // some checks to see if at least one element meets the condition

            const temperatures = [
                { degrees: 69, isRecordTemp: false }, 
                { degrees: 82, isRecordTemp: true }, 
                { degrees: 73, isRecordTemp: false }, 
                { degrees: 64, isRecordTemp: false }
            ]
            
            temperatures.some(temperature => temperature.isRecordTemp === true) // true / false

            // or 

            const result = temperatures.some(temperature => temperature.isRecordTemp) // true / false
            console.log(result)
            // => true

        // vs low powered includes method

            const temperatures = [69, 82, 73, 64]

            console.log(temperatures.includes(50))
            // => false
        
        //  every checks to see if every element meets the condition

            const temperatures = [
                { degrees: 69, isRecordTemp: false }, 
                { degrees: 82, isRecordTemp: false }, 
                { degrees: 73, isRecordTemp: false }, 
                { degrees: 64, isRecordTemp: false }
            ]
            
            const result = temperatures.every(temperature => !temperature.isRecordTemp) // true / false
            console.log(result)
            // => true