import SingleProduct from "@/components/layout/sections/shop/SingleProduct";

export function generateStaticParams() {
  return [];
}

export const dynamic = "force-dynamic";

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page(props: Props) {
  const { params } = props;

  if (!params?.id) {
    return <div>Missing product ID</div>;
  }

  const productId = parseInt(params.id.split("-")[0] || "0", 10);

  return <SingleProduct id={productId} />;
}
