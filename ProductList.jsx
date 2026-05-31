import React from "react";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "Easy-care succulent"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "https://via.placeholder.com/150",
    description: "Low maintenance indoor plant"
  }
];

function ProductList() {
  const handleAddToCart = (product) => {
    console.log("Added:", product);
  };

  return (
    <div>
      <h1>Plant Shop</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "200px"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="150"
            />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p>${product.price}</p>

            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
