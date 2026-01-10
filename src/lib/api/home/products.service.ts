import api from '@/lib/axios'; // Use your existing axios instance

/**
 * Bestseller product type (matches backend DTO v1.0)
 */
export interface BestsellerProduct {
  productId: string;
  productName: string;
  slug: string;
  sku: string;
  price: number;
  mrp: number;
  discountPercentage: number;
    imageUrl: string;
    images?: string[];   // ✅ FUTURE READY
  inStock: boolean;
}

/**
 * Bestseller API response (matches backend v1.0)
 */
export interface BestsellerResponse {
  version: string;
  timestamp: number;
  total: number;
  data: BestsellerProduct[];
  cached: boolean;
}

/**
 * Product API Service
 */
export const productService = {
  /**
   * Get bestseller products
   * Endpoint: GET /api/public/products/bestsellers
   * Cache: 10 minutes (Redis backend)
   */
  async getBestsellers(): Promise<BestsellerResponse> {
    const response = await api.get<BestsellerResponse>(
      '/api/public/products/bestsellers'
    );
    return response.data;
  },

  /**
   * Refresh bestseller cache (admin only)
   * Endpoint: POST /api/public/products/bestsellers/refresh
   */
  async refreshBestsellers(): Promise<void> {
    await api.post('/api/public/products/bestsellers/refresh');
  },
};