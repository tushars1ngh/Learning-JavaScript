// ===============================Strings==========================//

const str = `Hi Pujaa, This is Tushar From the IT Branch`

//basics operations
console.log(str.length);
console.log(str.toUpperCase);
console.log(str[0]);


//Finding SubStrings
console.log(str.indexOf('one'));
console.log(str.lastIndexOf('the'));
console.log(str.includes('puja'));


// Extract SubStrings
console.log(str.slice(3,8));
console.log(str.slice(-40,-35));
console.log(str.substring(0, 9));
console.log(str.substring(0));


// Concatenating strings and with number
const a = "Tushar"
const b = "Pujaa"
const c = a+" "+b
console.log(c);

console.log(143+" Pujaa");
console.log(140+3+" Pujaa"); // add and convert into strings


// Replace Substring
console.log(str.replace('Pujaa', 'Stranger'));

//Triming WhiteSpace
let t = "    Tushar    "
console.log(t.trim(t));

// Spiliting Strings
const names = "Tushar, Stranger, Avinash, Avijit, Bijay";
console.log(names.split(",")); //split and put in array


// ------------------------------------ Date -------------------------------------


// getting the current date and Time
const now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleString());



// Extracting Data Components
console.log(now.getDay()); // 1- Monday
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMonth()); // 0 - January



// Creating Custom date

const noww = new Date(2026, 9, 2, 10, 35, 44, 125);
console.log(noww);
console.log(noww.toString());


// MiliSeconds
const nowww = Date.now()
console.log(nowww);

const dates = new Date(0);
console.log(dates.toDateString());






