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