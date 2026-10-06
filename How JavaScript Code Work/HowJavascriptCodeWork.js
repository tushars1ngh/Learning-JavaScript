// ========================================================================
// How JavaScript Code Works Behind the Scene
// ========================================================================
//
// When JavaScript code is executed, an Execution Context is created.
//
// The Execution Context goes through two main phases:
//
// 1. Memory Allocation Phase
//    - Memory is allocated for variables and functions.
//    - Variables declared with var are initialized with undefined.
//    - let and const are created but remain uninitialized (TDZ).
//    - Function declarations are stored with their complete function code.
//
// 2. Execution Phase
//    - JavaScript executes the code line by line.
//    - Values are assigned to variables.
//    - Functions are called and executed.
//    - JavaScript executes statements and evaluates expressions to produce values.
//
// ================================================================================== ///





// 1. Execution Context

// 1.1 Memory Allocation Phase

// a = undefined
// b = undefined
// sumResult1 = undefined
// sumResult2 = undefined
// addNumber = fnCode


// 1.2 Execution Phase

// console.log(a) → undefined
// a = 10
// b = 20
// console.log(a) → 10
// sumResult1 = addNumber(10, 20) → 30
// sumResult2 = addNumber(4, 5) → 9
// console.log(sumResult1, sumResult2) → 30 9


console.log(a);
var a = 10;
var b = 20;
console.log(a);

var sumResult1 = addNumberr(a,b);
var sumResult2 = addNumberr(4,5);

function addNumberr(num1,num2){
    var sum = num1+num2;
    return sum;
}

console.log(sumResult1,sumResult2);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //



// 1. Execution Context

// 1.1 Memory Allocation Phase

// a = <uninitialized>  (TDZ)
// b = <uninitialized>  (TDZ)
// result = <uninitialized>  (TDZ)
// addNumber = <uninitialized>  (TDZ)


// 1.2 Execution Phase

// a = 10
// b = 20

// result = addNumber(a, b)
// -> Cannot access 'addNumber' before initialization
// -> addNumber is still <uninitialized>
// -> Execution stops


let aa = 10;
const bb = 20;

const result = addNumber(aa,bb);
console.log(result);

const addNumber = function(num1,num2){
    const sum = num1+num2;
    return sum;
}
