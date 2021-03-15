
// properties

    // Almost all JavaScript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error.

    null.length
    // → TypeError: null has no properties

    // The two main ways to access properties in JavaScript are with a dot and with square brackets. Both value.x and value[x] access a property on value—but not necessarily the same property. The difference is in how x is interpreted. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is evaluated to get the property name. Whereas value.x fetches the property of value named “x”, value[x] tries to evaluate the expression x and uses the result, converted to a string, as the property name.

    // So if you know that the property you are interested in is called color, you say value.color. If you want to extract the property named by the value held in the binding i, you say value[i]. Property names are strings. They can be any string, but the dot notation works only with names that look like valid binding names. 

    // application in an object:

    let day1 = {
        squirrel: false,
        events: ["work", "touched tree", "pizza", "running"]
    }
    console.log(day1.squirrel)
    // → false
    console.log(day1.wolf)
    // → undefined
    day1.wolf = false
    console.log(day1.wolf)
    // → false


// object operators

    // The delete operator is a unary operator that, when applied to an object property, will remove the named property from the object. This is not a common thing to do, but it is possible.

    let anObject = {left: 1, right: 2}
    console.log(anObject.left)
    // → 1
    delete anObject.left
    console.log(anObject.left)
    // → undefined
    console.log("left" in anObject)
    // → false
    console.log("right" in anObject)
    // → true

    // The binary in operator, when applied to a string and an object, tells you whether that object has a property with that name. The difference between setting a property to undefined and actually deleting it is that, in the first case, the object still has the property (it just doesn’t have a very interesting value), whereas in the second case the property is no longer present and in will return false.

    // To find out what properties an object has, you can use the Object.keys function. You give it an object, and it returns an array of strings—the object’s property names.

    console.log(Object.keys({x: 0, y: 0, z: 2}))
    // → ["x", "y", "z"]
    // There’s an Object.assign function that copies all properties from one object into another.

    let objectA = {a: 1, b: 2}
    Object.assign(objectA, {b: 3, c: 4})
    console.log(objectA)
    // → {a: 1, b: 3, c: 4}

    // Arrays, then, are just a kind of object specialized for storing sequences of things. If you evaluate typeof [], it produces "object".


// mutability in objects 

    let object1 = {value: 10}
    let object2 = object1
    let object3 = {value: 10}

    console.log(object1 == object2)
    // → true
    console.log(object1 == object3)
    // → false

    object1.value = 15
    console.log(object2.value)
    // → 15
    console.log(object3.value)
    // → 10

    // Similarly, though a const binding to an object can itself not be changed and will continue to point at the same object, the contents of that object might change.

    const score = {visitors: 0, home: 0}
    // This is okay
    score.visitors = 1
    // This isn't allowed
    score = {visitors: 1, home: 1}

    // When you compare objects with JavaScript’s == operator, it compares by identity: it will produce true only if both objects are precisely the same value. Comparing different objects will return false, even if they have identical properties. There is no “deep” comparison operation built into JavaScript, which compares objects by contents, but it is possible to write it yourself


// object log example with shorthand declaration

    let journal = []

    function addEntry(events, squirrel) {
        journal.push({events, squirrel})
    }

    // Note that the object added to the journal looks a little odd. Instead of declaring properties like events: events, it just gives a property name. This is shorthand that means the same thing—if a property name in brace notation isn’t followed by a value, its value is taken from the binding with the same name.

    // So then, every evening at 10 p.m.—or sometimes the next morning, after climbing down from the top shelf of his bookcase—Jacques records the day.

    addEntry(["work", "touched tree", "pizza", "running",
            "television"], false)
    addEntry(["work", "ice cream", "cauliflower", "lasagna",
            "touched tree", "brushed teeth"], false)
    addEntry(["weekend", "cycling", "break", "peanuts",
            "beer"], true)


// destructuring objects and arrays

    // instead of referencing a defined array like this:

    function phi(table) {
        return (table[3] * table[0] - table[2] * table[1]) /
          Math.sqrt((table[2] + table[3]) *
                    (table[0] + table[1]) *
                    (table[1] + table[3]) *
                    (table[0] + table[2]))
    }
    
    // we can name the variables to bind to the array elements as an array itself in the parameters of the function:

    function phi([n00, n01, n10, n11]) {
        return (n11 * n00 - n10 * n01) /
          Math.sqrt((n10 + n11) * (n00 + n01) *
                    (n01 + n11) * (n00 + n10))
    }

    // -- If you know the value you are binding is an array, you can use square brackets to “look inside” of the value, binding its contents.

    // A similar trick works for objects, using braces instead of square brackets.

    let {name} = {name: "Faraji", age: 23}
    console.log(name)
    // → Faraji

    // Note that if you try to destructure null or undefined, you get an error, much as you would if you directly try to access a property of those values.

    
// property access in parameters with destructuring

    const user = {
        name: "Reed",
        username: "Reedbarger",
        email: "reed@gmail.com",
        details: {
        title: "Programmer"  
        }  
    }
    
    // const { title } = user.details
    // const { name, details: { title} } = user;
    
    function displayUserBio({ name, details: { title} }) {
        console.log(`${name} is a ${title}`)
    }
    
    displayUserBio(user)


// merge objects with object assign 

    const user = {
        name: "",
        username: "",
        phoneNumber: "",
        email: "",
        password: ""  
    }
    
    const newUser = {
        username: "ReedBarger",
        email: "reed@gmail.com",
        password: "mypassword"  
    }
    
    console.log(Object.assign({}, user, newUser, { verified: false }))
        // => ›{name: "", username: "ReedBarger", phoneNumber: "", email: "reed@gmail.com", password: "mypassword", verified: false}
    

// merge objects with object spread operator

    const createdUser = { ...user, ...newUser, verified: false }
    console.log(createdUser)
        // => ›{name: "", username: "ReedBarger", phoneNumber: "", email: "reed@gmail.com", password: "mypassword", verified: false}


// bringing in maps

    // allows new types of key value pairs

        const nums = {
            1: 1,
            true: true
        }
        
        const map1 = new Map([
            [1, 1],
            [true, true]  
        ])

        const user = {
            name: "john",
            verified: true  
        }
          
        new Map([
            ["name", "john"],
            ["verified", true]  
        ])

    //  can add new keys with set:

        map1.set('key', 'value')

        console.log([...map1.keys()])
            // => [1, true, "key"]

    // these are ordered while objects are not

    // forEach on maps:

        map1.forEach((value, key) => {
            console.log(key, value);  
        })
            // => 
            // 1,1
            // true,true
            // key,"value"

        // example 2 

            const user1 = { name: "john" }
            const user2 = { name: "mary" }
            
            const secretKey1 = "asldjfalskdjf";
            const secretKey2 = "alksdjfakjsdf";
            
            
            const newMap = new Map([
                [user1.name, secretKey1],
                [user2.name, secretKey2]
            ])
            
            newMap.forEach((value, key) =>{
                console.log(key, value)
            })

    // use WeakMap for better file storage/memory when objects are keys

        const secretKeyMap = new WeakMap([
            [user1, secretKey1],
            [user2, secretKey2]  
        ])
        
        const key = secretKeyMap.get(user1)
        console.log(key)

    
    // find the length of an an object - convert to array and count the keys
            
        const nums = {
            1: 1,
            true: true
        }
        
        Object.keys(nums).length


    // length of maps is much easier

        const userMap = new Map([
            ["name", "john"],
            ["verified", true]  
        ])
        
        console.log(userMap.size)


// applying this in objects

    const userData = { 
        username: "Reed",
        title: "JavaScript Programmer",
        getBio() {
        console.log(`User ${this.username} is a ${this.title}`);
        }  
    }
    
    userData.getBio()

    // arrow functions have a lexical scope so they do not lose the this binding when in layered parent functions. BUT if you use them with this in a normal object method the lexical scope will look out too far.


// iterating over an object by turning it into an array

    // basic mod

        const obj = { one: 1, two: 2 };

        for (const key in obj) {
        console.log('value', obj[key]);
        }


    // object.keys() gives us an array of keys

        // simple use

            const user = {
                name: 'John',
                age: 29  
            }
            
            console.log(Object.keys(user))
            // -> ['name', 'age]
            
        // chaining on array methods

            const ageExists = Object.keys(user).includes('age')
            console.log(ageExists)
            // -> true

            const values = Object.keys(user).map(key => user[key])
            console.log(values)
            // -> ['john', 29]

    // object.values() gives us just the values of an object

        console.log(Object.values(user))
        // -> ['john', 29]

        // chaining with reduce

            const monthlyExpenses = {
                food: 400,
                rent: 1700,
                insurance: 550,
                internet: 49,
                phone: 95  
            };
            
            let sum = Object.values(monthlyExpenses).reduce((acc, num) => {
                acc = acc + num
                return acc
            }, 0)
            
            console.log(sum)
            // => 2794

    // object.entries() included both keys and values given in new array

        console.log(Object.defineProperties(user))
        // => [['name', 'john'], ['age', 29]]

        // chaining reduce

            const users = {
                '2345234': {
                name: "John",
                age: 29
                },
                '8798129': {
                name: "Jane",
                age: 42
                },
                '1092384': {
                name: "Fred",
                age: 17 
                }
            };
            
            const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
                if (user.age > 20) {
                acc.push({ ...user, id });
                }  
                return acc;
            }, []);
            console.log(usersOver20);
            // => [{name: "John", age: 29, id: "2345234"}, {name: "Jane", age: 42, id: "8798129"}]

          