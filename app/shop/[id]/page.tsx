import SingleProduct from "@/components/layout/sections/shop/SingleProduct";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const productId = parseInt(params.id?.split("-")[0] || "0", 10);

  return <SingleProduct id={productId} />;
}
