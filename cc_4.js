//Task 1: If Statements
let purchaseAmount = 39.99;
let finalAmount = purchaseAmount;
if (purchaseAmount > 100) {
    // For this example, applying a 10% discount
    const discount = purchaseAmount * 0.10;
    finalAmount = purchaseAmount - discount;
  }

  console.log(`Final amount after discount: $${finalAmount.toFixed(2)}`);

  //Task 2: For Loop//
let sales = [120, 85, 200, 150, 90];
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
  }
  console.log(`Total Sales:${totalSales}`);

  //Task 3: While Loop
let stock = 10; //the current stock 
while (stock>0) {
    console.log(`Current stock:${stock}`)
}

//Task 4: Do While Loop
let responses = 0;
do {
    responses++;
    console.log(`Response count:${responses}`);
} while (responses < 3);

//Task 5: For In Loop 
const employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
  };

  for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
  }

  //Task 6: For Of Loop 
  const products = ['Iphone','Ipad','Macbook'];

  for (const product of products) {
    console.log(`Product:${product}`);
  }

  //Task 7: foreach() Method
  const orders = [101, 102, 103];

  orders.forEach(order => {
    console.log(`Order ID: ${order}`);
  });

// Task 8: Function Declartion 
function calculateTax (amount, taxRate) {
    return amount * taxRate
};
// example of calcTax function 
let tax = calculateTax(800*0.075);

console.log(`Tax:${tax}`);

//Task 9: Function Expressions 
const applyDiscount = function(price, discountPercentnage) {
    return price - (price * (discountPercentnage/100));
}

let discountedPrice = applyDiscount (200,20)
console.log(`Discounted Price:${discountedPrice}`)

//Task 10: Arrow Functions 
const calculatePoints = (purchasesAmount) => {
    return (purchasesAmount / 10);
  };
  //Example of using the arrow function
  const purchasesAmount = 100; 
  const points = calculatePoints(purchasesAmount);
  
console.log(`For this purchase of $${purchasesAmount}, you earn ${points} loyalty points.`)