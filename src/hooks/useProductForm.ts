import { useState } from "react";
import { Product } from "@/types/product";

export function useProductForm(initial?: Product) {
  const [product, setProduct] = useState<Product | undefined>(initial);

  function updateField<K extends keyof Product>(
    key: K,
    value: Product[K]
  ) {
    setProduct(prev => prev ? { ...prev, [key]: value } : prev);
  }

  return {
    product,
    setProduct,
    updateField,
  };
}
