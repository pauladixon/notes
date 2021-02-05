
// properties

    // Almost all JavaScript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error.

    null.length;
    // → TypeError: null has no properties

    // The two main ways to access properties in JavaScript are with a dot and with square brackets. Both value.x and value[x] access a property on value—but not necessarily the same property. The difference is in how x is interpreted. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is evaluated to get the property name. Whereas value.x fetches the property of value named “x”, value[x] tries to evaluate the expression x and uses the result, converted to a string, as the property name.

    // So if you know that the property you are interested in is called color, you say value.color. If you want to extract the property named by the value held in the binding i, you say value[i]. Property names are strings. They can be any string, but the dot notation works only with names that look like valid binding names. 

    // application in an object:

    let day1 = {
        squirrel: false,
        events: ["work", "touched tree", "pizza", "running"]
      };
      console.log(day1.squirrel);
      // → false
      console.log(day1.wolf);
      // → undefined
      day1.wolf = false;
      console.log(day1.wolf);
      // → false


// operators

    // The delete operator is a unary operator that, when applied to an object property, will remove the named property from the object. This is not a common thing to do, but it is possible.

    let anObject = {left: 1, right: 2};
    console.log(anObject.left);
    // → 1
    delete anObject.left;
    console.log(anObject.left);
    // → undefined
    console.log("left" in anObject);
    // → false
    console.log("right" in anObject);
    // → true