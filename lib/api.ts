import { Product } from "@/store/useProductStore";

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

const getAllProducts = async (): Promise<Product[]> => {
  const products = await fetch("https://dummyjson.com/products?limit=200");

  let data = await products.json();

  data = data.products.filter((d: { category: string }) =>
    categories.includes(d.category)
  );

  return data.map(
    ({
      id,
      images,
      title,
      rating,
      price,
      discountPercentage,
      category,
      thumbnail,
      description,
    }: Product) => ({
      id,
      images,
      title,
      rating,
      price,
      discountPercentage,
      category,
      thumbnail,
      description,
    })
  );
};

export { getAllProducts };
