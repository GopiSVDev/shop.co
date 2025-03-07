import SingleProduct from "@/components/layout/sections/shop/SingleProduct";

export default async function Page({ params }: { params: { id?: string } }) {
  console.log("params:", params); // Debugging

  if (!params?.id) return <div>Product not found</div>;

  const productId = params?.id.split("-")[0];

  if (!/^\d+$/.test(productId)) {
    return <div>Invalid product ID</div>;
  }

  return <SingleProduct id={Number(productId)} />;
}
