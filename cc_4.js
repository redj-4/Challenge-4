let purchaseAmount = 39.99;
let finalAmount = purchaseAmount;
if (purchaseAmount > 100) {
    // For this example, applying a 10% discount
    const discount = purchaseAmount * 0.10;
    finalAmount = purchaseAmount - discount;
  }

  console.log(`Final amount after discount: $${finalAmount.toFixed(2)}`);