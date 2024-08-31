import { useLoaderData } from "react-router-dom";
import OrderModal from "./OrderModal";

const OrderStat = () => {
  const { orders } = useLoaderData();

  const mostExpensiveOrders = [...orders].sort(
    (a, b) =>
      Number(b.attributes.orderTotal.replace(/[^0-9]/g, "")) -
      Number(a.attributes.orderTotal.replace(/[^0-9]/g, ""))
  );
  return (
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium capitalize text-primary">
          most expensive order
        </div>
        <div className="collapse-content flex justify-between">
          <p>{mostExpensiveOrders[0].attributes.orderTotal}</p>{" "}
          <OrderModal
            id="my_modal_1"
            order={mostExpensiveOrders[0].attributes}
          />
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium capitalize text-primary">
          least expensive order
        </div>
        <div className="collapse-content flex justify-between">
          <p>
            {
              mostExpensiveOrders[mostExpensiveOrders.length - 1].attributes
                .orderTotal
            }
          </p>{" "}
          <OrderModal
            id="my_modal_2"
            order={
              mostExpensiveOrders[mostExpensiveOrders.length - 1].attributes
            }
          />
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium capitalize text-primary">
          last order
        </div>
        <div className="collapse-content flex justify-between">
          <p>on : {orders[0].attributes.createdAt.substring(0, 10)}</p>{" "}
          <OrderModal id="my_modal_3" order={orders[0].attributes} />
        </div>
      </div>
    </>
  );
};

export default OrderStat;
