// ===================== Scope ========================//

/*
Scope:
Scope is the part of a program where a variable or
function is accessible and can be used.

Types of Scope in JavaScript:

1. Global Scope
   - Declared outside all functions and blocks.
   - Accessible throughout the program.

2. Function Scope
   - Created inside a function.
   - `var` is function-scoped.
   - Accessible only within that function.

3. Block Scope
   - Created by `{ }`.
   - `let` and `const` are block-scoped.
   - Accessible only within that block.
*/



// ----------------- #1. Global Scope 

let a = 5;
const b = 80;

if(true){
    console.log(b);  // b can be accessed here because it is declared
                    // in the outer (global) scope.
}

const print = () => {
    console.log(a);  //easily accessable becoz it's declared in the global scope
}
print();


// ----------------- #2. Functional Scope
const greet = () => {
    let c = 32;     // no one can access outside the func 
    console.log(c); 
}
greet();
// console.log(c); // error


//  ----------------- #3. Block Level Scope
if(true){
    let d =10;
}
// console.log(d); error




// ===================== Closure ========================//

/*
Closure is when a function remembers and access variables from its outer scope 
even after the outer function has finished executing. 
*/


// EXPLAINATION is on CLOSURE.PNG
const createCounter = () => {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    }
}
const counter = createCounter();
counter();
counter();
counter();



// ----------------- BANK ACCOUNT EXAMPLE:  

/* 
Real-world example: 
Suppose I have built a banking app, and instead of storing a simple `count`, I am storing a `bankBalance`. 
I don't want anyone to be able to access or modify the balance directly.
So, I return functions that provide features to update the balance,
but no one can directly access or tamper with the original or actual balance.
*/

const bankAccountCreate = (initialBalance) => {
    let balance = initialBalance;

    const account = {
        deposit: function(amount) {
            balance += amount;
        },

        withdraw: function(amount) {
            balance -= amount;
        },

        getBalance: function() {
            return balance;
        }
    };

    return account;
};

const account = bankAccountCreate(1000);

console.log(account);

account.deposit(200);
console.log(account.getBalance()); // 1200

account.withdraw(200);
console.log(account.getBalance()); // 1000

