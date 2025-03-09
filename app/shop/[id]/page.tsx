import SingleProduct from "@/components/layout/sections/shop/SingleProduct";

export const dynamic = "force-dynamic";

// Define the expected props type
type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    return <div>Missing product ID</div>;
  }

  // Parse the ID from the URL
  const productId = parseInt(id.split("-")[0] ?? "0", 10);

  return <SingleProduct id={productId} />;
}
