import { formatPrice } from "../utils";
const OrderItem = ({
  address,
  cartItems,
  createdAt,
  name,
  numItemsInCart,
  orderTotal,
  updatedAt,
}) => {
  return (
    <section className=" card card-body border-b border-base-300 last:border-b-0  mb-12 pb-6 shadow-inner bg-base-100">
      <article className="   last:mb-4   ">
        <h4 className="">
          {numItemsInCart} {numItemsInCart > 1 ? "items" : "item"}
        </h4>
        {cartItems.map((item) => {
          const {
            title,
            image,
            price,
            amount,
            color,
            company,
            cartID,
            productColor,
          } = item;
          return (
            <div
              key={cartID}
              className="card card-compact sm:card-side  bg-base-100 shadow-2xl w-full mb-4 p-2 sm:p-4"
            >
              <figure className=" sm:h-24 sm:w-24">
                <img
                  src={image}
                  alt={title}
                  className="hidden sm:block h-40 w-40 rounded-xl sm:h-24 sm:w-24 object-cover"
                />
              </figure>
              <div className="card-body flex flex-col  gap-y-2 sm:gap-y-4 sm:flex-row">
                <div className="sm:ml-6 md:ml-12 w-32 md:w-52 ">
                  {" "}
                  <h2 className="card-title ">{title}</h2>
                  <h4 className="capitalize sm:mt-2 text-sm text-neutral-content ">
                    {company}
                  </h4>
                </div>
                <div className="sm:ml-6 md:ml-12">
                  {" "}
                  <p className="text-sm flex  items-center gap-x-4">
                    {" "}
                    color :{" "}
                    <span
                      style={{ backgroundColor: color || productColor }}
                      className="badge badge-sm"
                    />
                  </p>
                  <p className="text-sm sm:mt-2 ">Amount: {amount}</p>
                </div>
                <p className="font-semibold sm:flex text-secondary sm:justify-end">
                  {formatPrice(price * amount)}
                </p>
              </div>
            </div>
          );
        })}
      </article>
      <p>On {createdAt.substring(0, 10)}</p>
      <p>Address: {address}</p>
      <p className="mt-2 font-semibold text-secondary">Total: {orderTotal}</p>
    </section>
  );
};

export default OrderItem;
