import SingleProduct from "@/components/layout/sections/shop/SingleProduct";

export default function Page({ params }: { params: { id?: string } }) {
  if (!params?.id) {
    return <div>Missing product ID</div>;
  }

  // Extract ID from "id-title" format
  const productId = parseInt(params.id.split("-")[0] ?? "0", 10);

  return <SingleProduct id={productId} />;
}
