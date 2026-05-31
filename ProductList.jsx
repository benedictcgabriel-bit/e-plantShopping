Indoor Plants
Outdoor Plants
Succulents
Flowering Plants
const plantsArray = [
  {
    category: "Indoor Plants",
    plants: [
      {...},
      {...},
      {...},
      {...},
      {...},
      {...}
    ]
  }
];
dispatch(addItem(plant));
const [addedPlants, setAddedPlants] = useState({});
<button
  disabled={addedPlants[plant.id]}
  onClick={() => handleAddToCart(plant)}
>
  {addedPlants[plant.id]
    ? "Added to Cart"
    : "Add to Cart"}
</button>
const plantsArray = [...]
