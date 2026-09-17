interface Product {
  price: number;
  quantity: number;
}

interface CartResult {
  subtotal: number;
  discount: number;
  totalHT: number;
  tva: number;
  totalTTC: number;
}

function calculateCart(products: Product[], discount: number = 0): CartResult {
  let subtotal = 0;

  for (let i = 0; i < products.length; i++) {
    subtotal += products[i].price * products[i].quantity;
  }

  const discountAmount = (subtotal * discount) / 100;
  const totalHT = subtotal - discountAmount;
  const tva = totalHT * 0.2;
  const totalTTC = totalHT + tva;

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
