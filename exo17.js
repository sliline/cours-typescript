function calculateCart(products, discount) {
  let subtotal = 0;

  for (let i = 0; i < products.length; i++) {
    subtotal += products[i].price * products[i].quantity;
  }

  let discountAmount = (subtotal * discount) / 100;
  let totalHT = subtotal - discountAmount;
  let tva = totalHT * 0.2;
  let totalTTC = totalHT + tva;

  return {
    subtotal: subtotal,
    discount: discountAmount,
    totalHT: totalHT,
    tva: tva,
    totalTTC: totalTTC,
  };
}

console.assert(
  calculateCart([
    { price: 10, quantity: 2 },
    { price: 20, quantity: 1 },
  ]).subtotal === 40,
  "le sous-total devrait être 40",
);

console.assert(
  calculateCart(
    [
      { price: 10, quantity: 2 },
      { price: 20, quantity: 1 },
    ],
    10,
  ).totalTTC === 43.2,
  "le total TTC devrait être 43.2",
);
