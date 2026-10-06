

// ================================ Method 1: Basic Functions
addNumber(5,5);
function addNumber(num1, num2, num3=0, num4=0){
    return console.log(num1+num2+num3+num4);
}
addNumber(5,5,6); // If u don't give default value, it's throw NaN

addNumber(5,5,7,8);  // ufff! how much arguments should i pass..'Fix by Rest OPerator'




// ================================ Rest Operator
// when you don't know how many arguments are coming.

function multiplyNum(...num){   //... Collect all the remaining arguments and put them into an array called 'num'
    let mul=1;
    for(let n of num){
        mul *= n;
    }
    console.log(mul);
}
multiplyNum(4,5);




// ================================ Rest Operator vs Spread Operator
// #Rest:
const arr = [12,34,56,78,97];
const [first, second, ...num] = arr;    // whatever the remaining values are there, it collects all in a single array.
console.log(first, second, num);


// #Spread:
const arr1 = [12,34,56,78,97];
const arr2 = [...arr, ...arr1]   // it expands the element of an array or properties of object. used for: copy/combine/expand
console.log(arr2);




// ================================ Method 2 : Hold the Function in Variable

const vari = function greeting(){
    console.log("heyy puja..");
}
vari();

//-----------------------------------------important----------------------------------//
// In Method 1 basic functions = we can call function before initialization(function).
// but in method 2 = we cannot access before initilization(function)
// ------------------------------------------------------------------------------------//




// ================================ Method 3: Arrows Functions
const evenNumber = (num) => {
    if(num % 2 == 0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`);
    }
}
evenNumber(7);


// ------------In your code, if you want to return only -- then no need of { } and Return keyword:
const squareNum = (num)=> num*num;
console.log(squareNum(5));


// ------------suppose if you have only ONE parameters then -- no need of bracket () also.
const cubeNum = num => num**3;
console.log(cubeNum(2));



// ------------How arrays return objects: : :>

/* 
{} is treated as the function body and it expect that you will return something--- object{} and func{} both use {this} so it makes confusion.
 So when returning an object directly, 
 use: () => ({------})

 -----------------------------
 const obj = ()=>{
     let user = {
         name:'tushar',
         age : 23
     }
     return user;
 }
 -----------------------------
 console.log(obj());
*/

// SIMPLE NOTATIONS
const obj = () => ({name: 'tushar', age:32})
console.log(obj());



// ================================ Method 4: IIFE-> Immediately Invoked function Expression
// An IIFE is a function that is created and executed immediately.

const iife = (()=>{
    console.log('this is IIFE');
})();                                 
/*
(); -- using this we called the function immediately
(--here we write the function inside--)
*/




// ================================ Callback function  ================================

/*
    A calback function in JS is a function Passed as an argument to another Function
*/
const meet = () =>{
    console.log("Hello! avinash here");    
}

const greet = (callback) =>{
    console.log("Heyy! this is Tushar"); 
    callback();
    console.log("BadaPav khane chalega?");
}

const bye = () =>{
    console.log("i am getting late for tuition, bye");    
}

//callback
greet(meet);
bye()


/* expected o/p:
hey this is tushar
hello avinash here
Badapav khane chalega
i am getting late for tuition bye
*/
