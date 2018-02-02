- [Basic JS file](#basic-js-file)
- [If Statements](#if-statements)
- [Loops](#loops)
- [Arrays](#arrays)
- [Objects](#objects)
- [Fun Things](#fun-things)

# Basic JS file
```js
//variable declaration
var i = "hello";

//if statement
if (i.toLowerCase() == "hello") {
  console.log("world");
} else if (i.toLowerCase() == "bye") {
  console.log("cya");
} else {
  console.log(":(");
}

var statement = "hey";

//switch
switch (statement) {
  case "hey":
    console.log("test");
    break;
  case "hello":
    console.log("nou");
    break;
}

var k = 0;

//while loop
while (k < 10) {
  console.log(k);
  k++;
}

//for loop
for (var j = 0; j < 10; j++) {
  console.log(j);
}

//array
var arr = [true, 100, "string", ["\\"]];

//object
var person = {
  name: "Sam",
  age: 17,
  dead: false
}
```

# If Statements
If the statement inside of the parenthesis is true, then the following code will run, if not, the else statement will run, or if there is not one, it will be skiped entirely. The if and else if statements are completely optional.

```js
var one = 1;
var two = 2;

if(one == two) {
  console.log("I don't think that's how math works");
} else if (one !== two) {
  console.log("That makes more sense!");
} else {
  console.log("Huh, something must have gone wrong");
}
```

# Loops

* While Loops
  
  These loops will run until the statement inside of the parenthesis is false.

  ```js
  var i = 0;

  while (i < 10) {
    console.log(i);
    i++;
  }
  ```

* For Loops

  This loop requires 3 arguments inside of the declaration, the variable that will be used, when to run, and how much to increment each time the loop runs.

  ```js
  for(var i = 0; i < 10; i++) {
    console.log(i);
  }
  ```

# Arrays
Arrays can hold multiple values, that do not have to be of the same type. You may store any variable types together in an array, including more arrays!

```js
var arr = [true, 100, "test", [true, false]];
```

In order to access information inside of an array you should use the index which the information is at. Remember that arrays start at 0 not 1.

```js
console.log(arr[2]); //this will print "test"
```

# Objects
Objects in JavaScript are very different to those in Java, in JavaScript, they are key value pairs, where the name of the property is the key, and the value is the variable/amount associated with it.

```js
var person = {
  name: "Bob Jow",
  age: 1000,
  gender: "unknown"
}
```

There are two ways to access the values inside of an object, the most common way is to use dot notation, which is simply the name of the object, and then the name of the key.

```js
console.log(person.name); //this will print Bob Jow
```

If you are using a variable instead of the name of the key, you may also use square brackets instead.

```js
var test = "name";
console.log(person[test]); // this will also print Bob Jow
```

# Fun Things
JavaScript has some fun little quirks that you should know if you are going to be working with it. It is not required that you put a semicolon at the end of a line, it will compile either way.

```js
//these lines are both the same
var i = 0
var i = 0;
```

by default the `==` operator doesn't compare the types of variable so you can get interesting results.

```js
console.log(true == "true"); //this will print true
console.log(true + 1); //this will print 2 because true is equal to 1
```

If you would like to compare the types of the variables along with the value, you should use the `===` operator.

```js
console.log(true === "true") //this will print false
```