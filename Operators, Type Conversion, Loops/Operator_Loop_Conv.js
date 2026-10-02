let a=5;
let b=6;

//Arithmetic Operator
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Assignment operator
let x=5;
let y=10;
x += y;
x -= y;
x *= y;
x %= y;
console.log(x);

// Comparison Operator
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log(x!=y);

let i = 10;
let j = "10"
console.log(i==j);   //true (javascript automatically convert string into number during comparison)
console.log(i===j);   //false (first check data types if equal types then go ahead and compare)


// Handling "Not a number"
let m = "123abc"
let n = Number(m);
console.log(n);  //NaN
console.log(typeof n);
console.log(0/0);  //NaN

console.log("\n")


// TYpe Conversion:

//#1. Number --> String
let num = 347;
let str = String(num);
console.log(str, typeof str);

//#2. String --> Number
let str1 = "123";
let num1 = Number(str1);
console.log(num1, typeof num1);

// #3. Boolean --> Number
let bool = true;
let numbr = Number(bool);
console.log(numbr, typeof numbr);

// #4. Null --> Number
let null1 = null;
let numbr1 = Number(null1);
console.log(numbr1, typeof numbr1);

// #5. Undefined --> Number
let undef = undefined;
let numbr2 = Number(undef);
console.log(numbr2, typeof numbr2);

// Logical Operator
// # &&
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

let p = "pujaa"
let t = "tushar"
let c = p&&t;
console.log(c);

let p1 = "";
let t1 = "tushar";
let c1 = p1&&t1;
console.log(c1); //empty space

// Logical Operator
// # ||
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

let pu = "pujaa"
let tu = "tushar"
let cu = p||t;
console.log(cu);

let pu1 = "";
let tu1 = "tushar";
let cu1 = pu1||tu1;
console.log(cu1); // return 2nd value


// Bitwise Operator

const puja = 10;
const tushar = 7;
console.log(puja | tushar);
console.log(puja & tushar);

// For-Loop
for(let i=0; i<5; i++){
    console.log(i);
    
}

// while loop
let k=0;
while(k < 10){
    if(k % 2 == 0){
        console.log(`even ${k}`);   
    }
    k++;
}

// Do - While Loop
let odd=1;
do {
    console.log(`${odd} is odd`);
    odd += 2;
    
} while (odd < 10);
