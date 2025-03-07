import SingleProduct from "@/components/layout/sections/shop/SingleProduct";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const productId = id.split("-")[0];

  return <SingleProduct id={parseInt(productId)} />;
}
