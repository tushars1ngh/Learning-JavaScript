//=========================== E-commerce invoice and Receipt generator ===========================

const inventory = [
  { product: "Laptop", price: 57000, stock: 12 },
  { product: "Mouse", price: 700, stock: 35 },
  { product: "Keyboard", price: 2200, stock: 41 },
  { product: "RAM", price: 22000, stock: 7 },
  { product: "Laptop Stand", price: 500, stock: 13 },
  { product: "DSLR Camera", price: 180000, stock: 9 },
  { product: "USB", price: 10200, stock: 33 },
];


const cart = {
  Laptop: 3,
  Mouse: 2,
  Keyboard: 1,
  "Laptop Stand": 3,
};


let subTotal = 0;
const generateReceipt = (cart) => {
  const invoiceItems = [];

  for (let keys of Object.keys(cart)) {
    console.log(keys, cart[keys]);

    for (let items of inventory) {
      if (items.product == keys) {
        //check the stock is available or not
        if (cart[keys] <= items.stock) {
          let left = items.stock - cart[keys];

          //updating my stock
          items.stock = left;

          //total item
          const totalItem = cart[keys] * items.price;
          // console.log("Total Items: ", totalItem);

          // updateing subtotal
          subTotal += totalItem;
          //console.log("SubTotal: ", subTotal);

          // storing invoices details
          invoiceItems.push({
            Product: items.product,
            Quantity: cart[keys],
            "Unit Price": items.price,
            "Total items": totalItem,
          });
        } else {
          console.log("Out of Stock");
        }
      }
    }
  }


  // calculating discount
  let discount = 0;
  let finalPrice = subTotal;


  if (subTotal < 10000) {
    console.log("No Discount");
  } else {
    discount = subTotal * 0.05;
    finalPrice = subTotal - discount;
  }


  //calculating the TAX
  let tax = finalPrice * 0.5;


  // total money custumer has to pay
  totalMoney = finalPrice + tax;


  // ======================Printing the Invoices============================//
  console.table(invoiceItems);


  // ======================Printing the receipt============================//
  console.log("========Receipt========");

  console.table(
    `   
    Subtotal: ₹${subTotal}
    Discount: ₹${discount}
    After Discount: ₹${finalPrice}
    Tax: ₹${tax}
    Total Amount: ₹${totalMoney}
    `,
  );
};

generateReceipt(cart);
