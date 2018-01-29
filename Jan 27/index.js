var e = 11;

if (1 == 1) {
    
} else if (2 == 2) {

} else {

}

var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

for (var i = 0; i < 10; i++) {
    console.log(i)  
}

function addOne(times) {
    return times + 1;
}

console.log(addOne(1));

function addTwo(times) {
    console.log(times + 2)
}

addTwo(2)

var two = addOne(1)

var test = addTwo(2)

console.log(test)

var array = ["asdf", 100, true, ["\\"], "asdf"];

console.log(array[3][0])

var person = {
    name: "jack",
    age: 81,
    gender: "female",
    hello: function hello() { return "hello"},
    array
}

var thing = "name"

console.log(person)
