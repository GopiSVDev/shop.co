import SingleProduct from "@/components/layout/sections/shop/SingleProduct";

export function generateStaticParams() {
  return [];
}

export const dynamic = "force-dynamic";

// Define the params type according to Next.js 15 expectations
type PageProps = {
  params: {
    id: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function Page({ params }: PageProps) {
  // We need to handle the id parsing safely
  const id = params?.id;

  if (!id) {
    return <div>Missing product ID</div>;
  }

  const productId = parseInt(id.split("-")[0] || "0", 10);

  // Simulate async behavior to satisfy Next.js 15 requirements
  await Promise.resolve();

  return <SingleProduct id={productId} />;
}
