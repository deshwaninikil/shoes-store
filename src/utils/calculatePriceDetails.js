export const totalPrice = (cart) => {
  return cart.reduce((total, curr) => total + Number(curr.price) * curr.qty, 0);
};

export const totalDiscount = (cart) => {
  return cart.reduce(
    (total, curr) =>
      total + (Number(curr.price) - Number(curr.discountedPrice)) * curr.qty,
    0
  );
};

export const totalAmount = (cart) => {
  return cart.reduce(
    (total, curr) => total + Number(curr.discountedPrice) * curr.qty,
    0
  );
};
