//Creating Variables

var num =1; //number 0-9
var string = "this is string!"//string characters
var bool = true; //boolean true or false

console.log(num + string + bool); //console.log prints whatever you want in console

num = "this is now a string" // you can change variables to anything.. even after it is declared.. not too often used tho

console.log(num)

var name = "adrian"
var message = "has already done this before"
var anothermes = "'s lucky number is "
var trial = "why is this doing that?"

console.log( name + " says he " + message)
console.log(name + anothermes + 10)


console.log(12 + 3 + trial) //num comes first then added string
console.log (trial + 12 + 3) // string makes num turn to string which means that both num after string are a string

function counter() {
    for(var num = 0; num<=5; num ++)
    {
        console.log(num);
    }
}

counter();
counter();

function countUpTo(num) {
    for(var x = 0; x <=num; x++)
    {
        console.log(x);
    }
}

countUpTo(6);
