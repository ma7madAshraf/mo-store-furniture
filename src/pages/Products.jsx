import React from "react";
import { Filters, Pagination, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const productsQuery = (searchParams) => {
  return {
    queryKey: ["products", searchParams],
    queryFn: () =>
      customFetch(`/products`, {
        params: searchParams,
      }),
  };
};
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const searchParams = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const resp = await queryClient.ensureQueryData(productsQuery(searchParams));

    return { products: resp.data.data, meta: resp.data.meta, searchParams };
  };
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <Pagination />
    </>
  );
};

export default Products;
