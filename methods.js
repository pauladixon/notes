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


// math max function

    // the function Math.max takes any amount of number arguments and gives back the greatest.

    console.log(Math.max(2, 4));
    // → 4


// math min function 

    // Here a call to Math.min, which is the opposite of Math.max, is used as part of a plus expression:

    console.log(Math.min(2, 4) + 100);
    // → 102


// typeof / uppercase / lowercase methods

    // Both string and array values contain, in addition to the length property, a number of properties that hold function values.

    let doh = "Doh";
    console.log(typeof doh.toUpperCase);
    // → function
    console.log(doh.toUpperCase());
    // → DOH


// push and pop

    let sequence = [1, 2, 3];
    sequence.push(4);
    sequence.push(5);
    console.log(sequence);
    // → [1, 2, 3, 4, 5]
    console.log(sequence.pop());
    // → 5
    console.log(sequence);
    // → [1, 2, 3, 4]

    // The push method adds values to the end of an array, and the pop method does the opposite, removing the last value in the array and returning it.

    // These names are the traditional terms for operations on a stack. A stack, in programming, is a data structure that allows you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first. These are common in programming—you might remember the function call stack from the previous chapter, which is an instance of the same idea.


// shift and unshift

    // The corresponding methods for adding and removing things at the start of an array are called unshift and shift.

    let todoList = [];
    function remember(task) {
        todoList.push(task);
    }
    function getTask() {
        return todoList.shift();
    }
    function rememberUrgently(task) {
        todoList.unshift(task);
    }