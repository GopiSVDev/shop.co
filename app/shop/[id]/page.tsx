import SingleProduct from "@/components/layout/sections/shop/SingleProduct";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { id: string } }) {
  if (!params?.id) {
    return <div>Missing product ID</div>;
  }

  // Extract the numeric product ID from the URL slug (e.g., "123-product-name")
  const productId = parseInt(params.id.split("-")[0] || "0", 10);

  return <SingleProduct id={productId} />;
}
