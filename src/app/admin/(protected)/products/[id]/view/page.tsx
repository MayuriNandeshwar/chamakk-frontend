import { getAdminProduct } from "@/services/product.api";
import { ProductShell } from "@/components/product/ProductShell";

export default async function Page(props: any) {
  const params = await props.params;
  const id = params.id;

  const product = await getAdminProduct(id);

  return (
    <ProductShell
      mode="view"
      role="admin"
      product={product}
    />
  );
}
