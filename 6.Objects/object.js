

// ============================ What does an Object do?
// An Object stores related data in a structured way using key-value pairs.

const user = {
    name:"Tushar",
    age:21,
    mail: 'abc@gmail.com',
    account: 900
}
console.log(user);




// ============================ CRUD operations
// #1. Create - check if exist, otherwise insert this..
user.aadhar = 609999060572;
console.log(user);

// #2. Read the data
console.log(user.name);

// #3. Update the data
user.age = 23;

// #4. Delete the data
delete user.aadhar;
console.log(user);

// ----------------- N O T E ------------------
//  const user = {
//     "name":"Tushar",  Keys:: stored as string
//     "age":21,
// }




//  ============================ Pass By Reference
const user2 = user;
user2.name = "Tushar Singh";
console.log(user); //When two variables refer to the same object, changing one also changes the other.




// ============================ Print Keys and values onlyy and both at once (returns the new array)
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));




// ============================ Iterate through For-in Loop (but remember that it is not recommended)
for(let keys in user){
    console.log(keys, user[keys]);   
}




// ============================ Object Destructuring
// Takes the value from an array or/ objects and put them into separate variables.

const student = {
    name: "puja",
    rollno: 57,
    address: 'Ranijanj'
}

// const name = student.name;   Aam Zindagii
// const rollno = student.rollno;  Aam Zindagiii

const {name, rollno} = student;   // Mentos Zindagiii
console.log(name, rollno);




// ============================ Array DeStructuring
const arr = [12,34,56,78];

const [first, second, third] = arr;
console.log(first, second, third);




// ============================ Renaming destructured Varabile

// const student = {
//     name: "puja",
//     rollno: 57,
//     address: 'Ranijanj'
// }
const {name: username, rollno:roll_no} = student;
console.log(username, roll_no);




// ============================ For..Of Loop (this is the recommended one -- but directly we can't used on Object)

console.log(Object.keys(user)); // returns new array rememeber????? yup.

for(let keys of Object.keys(user)){
    console.log(keys);  // keys is String
}

for(let values of Object.values(user)){
    console.log(values);  
}

for(let entries of Object.entries(user)){   // return a new array containing the object key-values pair
    console.log(entries, typeof entries);    
}

// Recommended One is Thissssss --- Destructured of arrayy//
for(let [key, value] of Object.entries(user)){
    console.log(key, value);
}




// ============================ Adding Method: Function inside the object

const employee = {
    empName: "Bijay",
    empId: 123,
    addition : function(a,b){
        return a+b;
    }
}

let add = employee.addition(5,5);
console.log(add);




// ============================ This Keyword: It Stores the refernces of the current object

const employee1 = {
    empName: "Tushar",
    empId: 123,

    addition: function(a, b) {
        console.log(`Hey, this is ${this.empName}`);
        return a + b;
    }
};

console.log(employee1.addition(10, 20));




//  ============================ Nested Object: 

const employee3 = {
    empName: "Avinash",
    empId: 123,
    office : {
        "Office name": "Amazon",
        OfficeAddress: "Gopal Nagar"
    }
}
console.log(employee3);
console.log(employee3.office["Office name"]);




// ============================ Shallow copy (Independent Copy) "Spread Operator"

// we know,
// const employee4 = employee;
// employee4.empName = "Baigan"  it refers to the same Object, changes in one reflect to others

const employee5 = {...employee3}
employee5.empName = "Ravi Kishan"; // changes only in employee5 only
employee5.office.OfficeAddress = "Kolkata" // not works on inner object, works only on 1st level (changes in both)
console.log(employee3, employee5);




// ============================ Deep Copy
const employee6 = structuredClone(employee5);
employee6.office.OfficeAddress = "Delhi"
console.log(employee5, employee6);




// ============================ Number Keys in Object
const std = {
    stdName : "avinash",
    0 : 120,             // but BTS: "0", "1" -- bbecause keys is a string
    1 : 122
}
console.log(std[0] = "tushar");
console.log(std);

