const dispatch = useDispatch();

const handleAddToCart = (plant) => {
  dispatch(addItem(plant));

  setAddedPlants({
    ...addedPlants,
    [plant.id]: true
  });
};
<button
  disabled={addedPlants[plant.id]}
  onClick={() => handleAddToCart(plant)}
>
  {addedPlants[plant.id]
    ? "Added to Cart"
    : "Add to Cart"}
</button>
