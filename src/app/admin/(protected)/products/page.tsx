import PageHeader from "@/components/admin/shared/PageHeader";
import ProductTable from "@/components/admin/products/ProductTable";
import EmptyProducts from "@/components/admin/products/EmptyProducts";
import { getAdminProducts } from "@/services/admin.products.service";

export default async function AdminProductsPage() {
  const products = await getAdminProducts();

  return (
    <section className="space-y-6 p-8">
      <PageHeader
        title="Products"
        subtitle="Manage all products in your store"
        actionLabel="Add Product"
        actionHref="/admin/products/new"
      />

      {products.length === 0 ? (
        <EmptyProducts />
      ) : (
        <ProductTable products={products} />
      )}
    </section>
  );
}
