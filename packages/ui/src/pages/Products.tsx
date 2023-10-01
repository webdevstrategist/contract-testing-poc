import { useEffect, useState } from "react";
import API from "../api";

interface Product {
  id: string;
  name: string;
  website?: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: boolean;
}

function Products() {
  const [productApiState, setProductApiState] = useState<ProductState>({
    loading: true,
    products: [],
    error: false,
  });

  useEffect(() => {
    API.getAllProducts()
      .then((r: Product[]) => {
        setProductApiState({
          ...productApiState,
          loading: false,
          products: r,
          error: false,
        });
      })
      .catch(() => {
        setProductApiState({
          ...productApiState,
          loading: false,
          error: true,
        });
      });
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-semibold text-2xl">Products</h1>
      {productApiState.loading && <p>Loading...</p>}
      {productApiState.error && (
        <p className="text-red-600">Failed to fetch response from API.</p>
      )}
      {productApiState.products && productApiState.products.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  ID
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Website
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {productApiState.products.map((product: Product) => {
                return (
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {product.id}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {product.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {product.website}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Products;
