"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Badge from "@/components/ui/badge";
import { AdminProductListDto } from "@/services/admin.products.service";


type Props = {
  products: AdminProductListDto[];
};

export default function ProductTable({ products }: Props) {
  const router = useRouter();

  return (
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader className="text-left">
              Product
            </TableCell>
            <TableCell isHeader>Price</TableCell>
            <TableCell isHeader>Status</TableCell>
            <TableCell isHeader>Last Updated</TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.productId}
                className="cursor-pointer hover:bg-gray-50 transition"
                onClick={() =>
                  router.push(`/admin/products/${product.productId}`)
                }
              >
                <TableCell className="flex items-center gap-4 py-4">
                  {product.thumbnail && (
                    <Image
                      src={product.thumbnail}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="rounded-lg object-cover border"
                    />
                  )}

                  <div>
                    <div className="font-semibold text-gray-900">
                      {product.name}
                    </div>
                  </div>
                </TableCell>

                <TableCell className="font-medium">
                  ₹{product.basePrice.toFixed(2)}
                </TableCell>

                <TableCell>
                  <Badge
                    variant="light"
                    color={product.status === "PUBLISHED" ? "success" : "warning"}
                    size="sm"
                  >
                    {product.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-sm text-gray-600">
                  {new Date(product.updatedAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

      </Table>
    </div>
  );
}
