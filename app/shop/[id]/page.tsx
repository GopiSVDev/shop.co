import SingleProduct from "@/components/layout/sections/shop/SingleProduct";
import PageWrapper from "@/components/PageWrapper";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    return <div>Missing product ID</div>;
  }

  const productId = parseInt(id.split("-")[0] ?? "0", 10);

  return (
    <PageWrapper>
      <SingleProduct id={productId} />
    </PageWrapper>
  );
}
