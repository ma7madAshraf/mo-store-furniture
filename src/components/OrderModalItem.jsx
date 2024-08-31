import { formatPrice } from "../utils";

const OrderModalItem = ({
  address,
  cartItems,
  createdAt,
  name,
  numItemsInCart,
  orderTotal,
  updatedAt,
}) => {
  return (
    <section className=" card card-body border-b border-base-300 last:border-b-0  mb-4 pb-2 sm:pb-6 shadow-inner bg-base-100">
      <article className="   last:mb-4   ">
        <h4 className="">items:{numItemsInCart}</h4>
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
              className="card card-compact sm:card-side  bg-base-100 shadow-xl w-full mb-2 sm:mb-4 p-2 sm:p-4"
            >
              <figure className="sm:h-24 sm:w-24">
                <img
                  src={image}
                  alt={title}
                  className="hidden sm:block h-16 w-16 rounded-xl object-cover"
                />
              </figure>
              <div className="card-body flex flex-row  sm:gap-y-4">
                <div className="sm:ml-4 w-32 ">
                  {" "}
                  <h2 className="card-title ">
                    <span className="absolute top-[30px] left-[5px] text-xs sm:hidden text-neutral-content">
                      {amount}x{" "}
                    </span>
                    {title}
                  </h2>
                  <h4 className="capitalize sm:mt-2 text-sm text-neutral-content ">
                    {company}
                  </h4>
                </div>
                <div className="ml-auto">
                  {" "}
                  <p className="hidden sm:block text-sm flex  items-center gap-x-2 sm:gap-x-4">
                    {" "}
                    color :{" "}
                    <span
                      style={{ backgroundColor: color || productColor }}
                      className="badge badge-sm"
                    />
                  </p>
                  <p className=" hidden sm:block text-sm mt-1 ">
                    Amount: {amount}
                  </p>
                  <p className="font-semibold sm:mt-3 text-secondary">
                    {formatPrice(price * amount)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </article>
      <p>On {createdAt.substring(0, 10)}</p>
      <p>Address: {address}</p>
      <p className="mt-2 text-secondary font-semibold">Total: {orderTotal}</p>
    </section>
  );
};

export default OrderModalItem;
