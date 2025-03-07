import SingleProduct from "@/components/layout/sections/shop/SingleProduct";

export function generateStaticParams() {
  return [];
}

export const dynamic = "force-dynamic";

interface PageParams {
  params: {
    id: string;
  };
  searchParams: Record<string, string | string[]>;
}

export default async function Page({ params }: PageParams) {
  if (!params?.id) {
    return <div>Missing product ID</div>;
  }

  const productId = parseInt(params.id.split("-")[0] || "0", 10);

  return <SingleProduct id={productId} />;
}
