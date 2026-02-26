import { getPublicProduct } from "@/services/product.api";
import { ProductShell } from "@/components/product/ProductShell";

export default async function Page({ params }: any) {
  const product = await getPublicProduct(params.slug);

  return (
    <ProductShell
      mode="view"
      role="customer"
      product={product}
    />
  );
}
