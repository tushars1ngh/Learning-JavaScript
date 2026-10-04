// Heterogenous DataTypes in JS
let arr = [23, 4.3, "Tushar", true]
console.log(arr);

// Access elements by index
console.log(arr[2]);

//Array is Mutable
arr[1] = 87.5;
console.log(arr);

// Adding element to the End
arr.push(false);
console.log(arr);

// Removing element from the end
arr.pop();
console.log(arr);

// Adding element to the begining
arr.unshift("Tushar", 145);
console.log(arr);

// Removing element from the begining
arr.shift();
console.log(arr);

// ====================================================================================//
let arr1 = [23, 4.3, 34, 55, "Tushar", true]

// Iterate with For Loop
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);    
}

// Iterate with For..of Loop
for(let num of arr1){
    console.log(num);
}



// ============Copying array as Copy by ref
const arr3 = [10,20,30,40,50];
const arr4 = arr3;
arr4.push(100);
console.log(arr4);



// ============Slicing Array
const arr5 = arr4.slice(1,3);
console.log(arr5); //returns new array
console.log(arr4); // no changes in original array

// change in original array
// const arr5 = arr4.splice(1,3);




// ============Merge array with Spread Operator
const arr6 = [34,45,23,45,22];
const arr7 = ["tushar", "Pujaa", "Avinash", "Avijit"];
// const arr8 = arr6.concat(arr7); returns new array

const arr8 = [...arr6, ...arr7];
console.log(arr8);




// ============Converting array to String
console.log(arr6.toString());
// alternative(.joins)
console.log(arr6.join("---"));



// ============Searching in Array
// const arr7 = ["tushar", "Pujaa", "Avinash", "Avijit"];
console.log(arr7.includes("pujaa"));
console.log(arr7.indexOf("Pujaa"));
console.log(arr7.lastIndexOf("Pujaa"));



// ============Sorting arrays of String
arr7.sort();
console.log(arr7);



// ============Reverse Array Order
arr7.reverse();
console.log(arr7);



// ============Custom Sorting for Ascending Order (for NUMBERS)
const custm = [34,76,45,9,2.1,66,11,29];
custm.sort((a,b) => a-b)
console.log(custm);


// ============Flattening Nested array
const flat = [32,56,23,45, [65,34,66,78], 34, 43, [36,31,76,35]]

console.log(flat[4])
console.log(flat[7])
console.log(flat[4][2])
console.log(flat[7][2])

console.log(flat.flat(Infinity));

