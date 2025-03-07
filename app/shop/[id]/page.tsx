import SingleProduct from "@/components/layout/sections/shop/SingleProduct";

interface PageProps {
  params: { id?: string };
}

export default function Page({ params }: PageProps) {
  if (!params?.id) {
    return <div>Error: No Product ID</div>;
  }

  const productId = parseInt(params.id.split("-")[0] ?? "0", 10);

  return <SingleProduct id={productId} />;
}
