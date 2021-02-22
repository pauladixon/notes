// loop exercises

    // Looping a triangle

        // Write a loop that makes seven calls to console.log to output the following triangle:

        // #
        // ##
        // ###
        // ####
        // #####
        // ######
        // #######

        for (let line = '#'; line.length < 8; line += '#'){
            console.log(line)
        }

    // FizzBuzz

        // Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
        
        // When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

        // my solution

            for (let i=1; i<=100; i++){
                if (i%15 === 0){
                    console.log('fizzbuzz')
                } else if (i%5 === 0){
                    console.log('buzz')
                } else if (i%3 === 0){
                    console.log('fizz')
                } else console.log(i)
            }

        // ejs solution

            for (let j=1; j<=100; j++){
                let output = ''
                if (j%3 == 0) output += 'fizz'
                if (j%5 == 0) output += 'buzz'
                console.log(output || j)
            }

    // chessboard

        // Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

        // Passing this string to console.log should show something like this:

        //  # # # #
        // # # # # 
        //  # # # #
        // # # # # 
        //  # # # #
        // # # # # 
        //  # # # #
        // # # # #

        // When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

        // my solution 

            let binding = 8
            let string = '   # # # #'
            
            for (i=2; i<=binding; i++){
            if (i%2 == 0){
                string += `
                # # # # `
            } else string += `
            # # # #`
            }
            
            console.log(string)

        // ejs solution

            let size = 8
            let board = ''

            for (let y=0; y<size; y++){
                for (let x=0; x<size; x++){
                    if ((x+y)%2 ==0){
                        board += ' '
                    } else {
                        board += '#'
                    }
                }
                board += '/n'
            }

            console.log(board)


// function exercises

    // minimum

        // The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

        // my solution

            let min = (num1, num2) => {
                if (num1 < num2){
                    return num1
                } else return num2
            }

        // ejs solution

            function min(a,b){
                if (a<b) return a
                else return b
            }

        
    // recursion

        // We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd. Zero is even. One is odd. For any other number N, its evenness is the same as N - 2. Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean. Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

        // my solution

            let isEven = (num) => {
                if (num == 0){
                    return true
                } else if (num == 1){
                    return false
                } else return isEven(num)
            }

        // ejs solution

            function isEven(n) {
                if (n == 0) return true;
                else if (n == 1) return false;
                else if (n < 0) return isEven(-n);
                else return isEven(n - 2);
            }
            
            console.log(isEven(50));
            // → true
            console.log(isEven(75));
            // → false
            console.log(isEven(-1));
            // → 
            
    
    // bean counting

        // You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

        // Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string. Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

        // my solutions

            let countBs = (str) => {
                let counter = 0
                for (i=0; i<str.length; i++){
                    if (str[i] === 'B'){
                        counter++
                    } 
                }
                return counter
            }

            let countChar = (str, char) => {
                let counter = 0
                for (i=0; i<str.length; i++){
                    if (str[i] === char){
                        counter++
                    } 
                }
                return counter
            }

        // ejs solutions

            function countChar(string, ch) {
                let counted = 0;
                for (let i = 0; i < string.length; i++) {
                if (string[i] == ch) {
                    counted += 1;
                }
                }
                return counted;
            }
            
            function countBs(string) {
                return countChar(string, "B");
            }
            
            console.log(countBs("BBC"));
            // → 2
            console.log(countChar("kakkerlak", "k"));
            // → 4