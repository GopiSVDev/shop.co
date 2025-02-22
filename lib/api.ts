const getAllProducts = async () => {
  const categories = [
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "skin-care",
    "sunglasses",
    "tops",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];

  const products = await fetch("https://dummyjson.com/products?limit=200");
  let data = await products.json();

  data = data.products.filter((d: { category: string }) =>
    categories.includes(d.category)
  );

  return data.map(({ images, title, rating, price, discountPercentage }) => ({
    images,
    title,
    rating,
    price,
    discountPercentage,
  }));
};

export { getAllProducts };
