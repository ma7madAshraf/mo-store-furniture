import AmountButtons from "./AmountBtns";
import { formatPrice } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ title, image, price, amount, color, company, cartID }) => {
  const dispatch = useDispatch();
  const toggleAmount = (type) => {
    let newAmount;
    if (type === "inc") {
      newAmount = amount + 1;
    } else if (type === "dec") {
      newAmount = amount > 1 ? amount - 1 : 1;
    }

    dispatch(editItem({ cartID, newAmount }));
  };
  return (
    <article className="flex flex-col  gap-y-4 sm:flex-row  mb-12 last:mb-4 pb-6 border-b border-base-300 last:border-b-0 ">
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-xl sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-40 ">
        <h3 className="capitalize font-medium ">{title}</h3>
        <h4 className="capitalize mt-2 text-sm text-neutral-content ">
          {company}
        </h4>
        <p className="mt-4 text-sm flex  items-center gap-x-4">
          {" "}
          color :{" "}
          <span style={{ backgroundColor: color }} className="badge badge-sm" />
        </p>
      </div>
      <div className="sm:ml-12">
        <p className="text-sm mb-2 ">Amount</p>
        <AmountButtons
          amount={amount}
          toggleAmount={toggleAmount}
          size="text-base"
        />
        <a
          className="block link link-hover link-primary mt-3 text-sm"
          onClick={() => dispatch(removeItem({ cartID, price, amount }))}
        >
          remove
        </a>
      </div>
      <p className="sm:ml-auto font-medium">{formatPrice(price * amount)}</p>
    </article>
  );
};

export default CartItem;
