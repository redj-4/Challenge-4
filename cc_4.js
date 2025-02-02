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