// Using toFind() for number Formatting
let a =5;
let b= 234.3464;
console.log(b.toFixed(2), typeof b);

// Using toPrecision() for number Precison
console.log(b.toPrecision(4), typeof b);

// Using toString() to convert number -> string
let x=4932;
console.log(x.toString(), typeof x.toString(), typeof x);

// Creating number as an object
let num = new Number(26);
console.log(num, typeof num);


//===============IntroDuction to MAth Object=====================
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.abs(-4));
console.log(Math.floor(345.345));
console.log(Math.ceil(323.23));
console.log(Math.max(443,6,7,567));

//Random number generate:
console.log(Math.floor(Math.random()*10));  // it's generating between 0-9

//generate between 1-10
console.log(Math.floor(Math.random(6)*10)+1);

//generate between 1-6
console.log(Math.floor(Math.random()*6)+1);

//generate between 22-36
console.log(Math.floor(Math.random()*(36-22+1))+22);


// PROJECT1:
// Generate OTP: 1000-9999
console.log(Math.floor(Math.random()*(9999-1000+1))+1000);

// Formula
// Math.floor(Math.random()*(max-min+1)+min:
// where, (max-min+1) is total number of outcomes,
//        +min is Shift
