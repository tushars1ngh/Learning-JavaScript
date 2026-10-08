// =======================For Each Loop===========================//

const arr = [10,20,30,40,50]

let sum = 0;
arr.forEach((number) => {
    // console.log(number);
    sum+=number
})
console.log(sum);




// =======================Filter()===========================//

/* 
filter() is an array method used to select elements 
that satisfy a condition and return them in a new array.
*/

const newArr = arr.filter((number) => number > 25);
console.log(newArr);

/*
arr → array
filter() → method
(number) => number > 25 → callback function 
number → parameter of the callback
number > 25 → condition/return value of the callback
*/


/*
-----------------------------WORKING-------------------------------
const newArr = arr.filter((number) => number > 25);

1. `arr` is the array on which the `filter()` method is called.

2. `filter()` is an array method that checks every element of `arr`.

3. `(number) => number > 25` is the callback function passed to `filter()`.

4. `number` is the parameter of the callback function.
   It receives one array element at a time.

5. `number > 25` is the condition checked for each element.

6. The callback returns `true` or `false`.

7. If it returns `true`, that element is included in the new array.

8. If it returns `false`, that element is not included.

9. `filter()` returns a new array.

10. `const newArr` stores the new array returned by `filter()`.

11. The original `arr` is not modified.
*/




// =======================Custom Filtering Implementation===========================//

Array.prototype.filtering = function(compare){

    const ans = [];
    for(let num of this){
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;
}

const newArray = arr.filtering((num) => num>10);
console.log(newArray);




// ======================= MAP() in Array ===========================//

const array = [10,20,30,40,50,60]
const returnNewArr = array.map((num) => num*2);
console.log(returnNewArr);


// ======================= Real-World datasets ===========================//
const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

//#1. Filtering Real world product
const prod = products.filter((product) => product.price>50);
// Here product represents the current object. Then move to Next.
console.log(prod);

//#2. Sorting
const prod1 = products.filter((product) => product.price>50).sort((a,b)=>b.price-a.price)
console.log(prod1);

//#3.  Transforming data with Map()
const prod3 = products.map((product) => ({
    name: product.name,
    inStock: product.inStock
}));
console.log(prod3);




// ======================= Reduce() ===========================//

/*
    It is an array method used when you want to combine all elements of an array
    into one final value
*/

const totalPrice = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
}, 0);
console.log(totalPrice);




// ======================= Set - Data Structure ===========================//

/*
Set is a built-in collection used to store unique values. 
*/

const arrayy = [10,10,20,20,30,30];

const s1 = new Set(arrayy)
console.log(s1);
s1.add(40);
s1.has(20);
s1.delete(10);
console.log(s1.size)
console.log(s1);
// s1.clear()

// Use Cases:

const email = ['abc@gmail.com', 'bcd@gmail.com', 'abc@gmail.com'];
const s2 = new Set(email);
console.log(s2);




// ======================= Map - Data Structure ===========================//

/*
Map is a JavaScript data structure that stores data in key-value pairs, where keys can be of any data type.
*/

const m1 = new Map([
    ["Rohit", 40],
    [2, 'Tushar'],
    [true, 40],
    [[10,20,30], "Avinashh"]
])
console.log(m1);

m1.set({name : 'Tushar', age: 23}, false)
console.log(m1);
m1.has("roht")
console.log(m1.get(2))
m1.delete("Rohit")
m1.size
// m1.clear()


//Iteration

for(let [keys, value] of m1){
    console.log(keys, value);
}
