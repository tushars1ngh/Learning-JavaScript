// ________________________________VAribles_____________________________________
// 3 ways to declare a variables

// let
let n=5;
for(let i=0; i<n; i++){
    console.log(i);
}


// var -- older method
var m=5;
for(let i=0; i<m; i++){
    console.log(i);
}

// const
// 1. Creating a constant (Cannot be changed directly)
const birthYear = 1995;
console.log(birthYear); // Outputs: 1995
// birthYear = 2000;    // you can't change it!


// 2. Constants with Lists (You can change items inside the list, but not the list itself)
const colors = ["red", "green"];
colors.push("blue");    // Adds "blue" to the end of the list
console.log(colors);    // Outputs: ["red", "green", "blue"]


// __________________________________Data Typess____________________________________________

// dataTYpes are of two types: Primitive and Non-primitive

//#1 Primitive:

// #number:
let a=5;
let b=23.4;

// #String:
let str="Tushar"

// #Boolean:
let areouThere = false;

// #Undefined:
let user; //----> output: undefined by default

// # BigInt:
let x = 12345678901234567890n;
console.log(typeof x);

//Null:
let weather = null;
console.log(weather)
console.log(typeof weather)

//Symbol:
const id1 = Symbol("id");
console.log(id1)


//#2. Non - Primitive:

//Arrays
let arr = [22,33,'puja', 3.12, true, false, null];
console.log(arr)

//Objects:
let obj = {
    name: "tushar",
    roll_no: 23,
    batch: "A"
}
console.log(obj)

// functions:
function add() {
    console.log("Hello");
}

add();
