"use client";

import { useRouter } from "next/navigation";
import { useProductForm } from "@/hooks/useProductForm";
import { Product } from "@/types/product";
import { ProductShell } from "@/components/product/ProductShell";
import api from "@/lib/axios";

export default function ProductEditClient({
  initialProduct,
}: {
  initialProduct: Product;
}) {
  const router = useRouter();
  const { product, setProduct } = useProductForm(initialProduct);

  async function saveProduct() {
    if (!product) return;

    await api.put(`/api/admin/products/${product.productId}`, {
      name: product.name,
      description: product.description,
      variants: product.variants,
      attributes: product.attributes,
    });

    router.refresh();
  }

  async function publishProduct() {
    if (!product) return;

    await api.put(`/api/admin/products/${product.productId}/publish`);
    router.refresh();
  }

  if (!product) return null;

  return (
    <ProductShell
      mode="edit"
      role="admin"
      product={product}
      onSave={saveProduct}
      onPublish={publishProduct}
      setProduct={setProduct}
    />
  );
}
