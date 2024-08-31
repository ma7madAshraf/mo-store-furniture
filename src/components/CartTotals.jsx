import { formatPrice } from "../utils";
import { useSelector } from "react-redux";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (store) => store.cart
  );
  return (
    <div className="card bg-base-200  ">
      <div className="card-body text-xs ">
        <p className="flex justify-between  border-b pb-2 border-base-300">
          {" "}
          <span>Subtotal</span> <span>{formatPrice(cartTotal)}</span>
        </p>{" "}
        <p className="flex justify-between  border-b pb-2 border-base-300">
          {" "}
          <span>Shipping</span> <span>{formatPrice(shipping)}</span>
        </p>{" "}
        <p className="flex justify-between  border-b pb-2 border-base-300">
          {" "}
          <span>Tax</span> <span>{formatPrice(tax)}</span>
        </p>{" "}
        <p className="flex justify-between   pb-2  mt-4 text-sm">
          {" "}
          <span>Order Total</span> <span>{formatPrice(orderTotal)}</span>
        </p>{" "}
      </div>
    </div>
  );
};

export default CartTotals;
