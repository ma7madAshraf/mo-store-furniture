import { useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";
import { RiShoppingBagLine } from "react-icons/ri";
import Pagination from "./Pagination";
const OrdersTable = () => {
  const { orders, meta } = useLoaderData();
  return (
    <section className="h-screen mt-6">
      <div className="stats shadow mb-8 bg-base-300">
        <div className="stat">
          <div className="stat-figure text-primary">
            <RiShoppingBagLine className="text-3xl font-bold" />
          </div>
          <div className="stat-title">total orders</div>
          <div className="stat-value text-primary">{meta.pagination.total}</div>
        </div>
      </div>
      <div>
        {orders.map((order) => {
          return <OrderItem key={order.id} {...order.attributes} />;
        })}
      </div>
      <Pagination />
    </section>
  );
};

export default OrdersTable;
