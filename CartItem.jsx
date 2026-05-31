<button
  onClick={() =>
    alert("Coming Soon!")
  }
>
  Checkout
</button>
if (quantity > 1)
  const handleDecrease = (item) => {
  if (item.quantity === 1) {
    dispatch(removeItem(item.id));
  } else {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      })
    );
  }
};
