import React from "react";
import SectionTitle from "../components/SectionTitle";
import OrdersTable from "../components/OrdersTable";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
const ordersQuery = (user, params) => {
  const { page } = params;
  return {
    queryKey: ["orders", user.username, page ?? 1],
    queryFn: () =>
      customFetch("/orders", {
        headers: { Authorization: `bearer ${user.token}` },
        params: params,
      }),
  };
};
export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().user.user;

    const searchParams = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const resp = await queryClient.ensureQueryData(
        ordersQuery(user, searchParams)
      );

      return { orders: resp.data.data, meta: resp.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error accessing your orders";

      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };
const Orders = () => {
  const { orders, meta } = useLoaderData();

  if (!orders) {
    return (
      <div>
        <SectionTitle text="your orders" />
        <div className="h-[20vh] flex justify-center items-center">
          <h2 className="text-3xl">there is no orders yet</h2>
        </div>
      </div>
    );
  }
  return (
    <div>
      <SectionTitle text="your orders" />
      <OrdersTable />
    </div>
  );
};

export default Orders;
