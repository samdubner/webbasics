- [Basic JS file](#basic-js-file)

# Basic JS file
```js
var i = "hello";

if (i.toLowerCase() == "hello") {
  console.log("world");
} else if (i.toLowerCase() == "bye") {
  console.log("cya");
} else {
  console.log(":(");
}

var statement = "hey";

switch (statement) {
  case "hey":
    console.log("test");
    break;
  case "hello":
    console.log("nou");
    break;
}

var k = 0;
while (k < 10) {
  console.log(k);
  k++;
}

for (var j = 0; j < 10; j++) {
  console.log(j);
}

var arr = [true, 100, "string", ["\\"]];

var person = {
  name: "Sam",
  age: 17,
  dead: false
}
```
