import React, { useState } from "react";
import { customFetch, formatPrice } from "../utils";
import { useLoaderData } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import { AmountBts } from "../components";
import { addItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const resp = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    const product = resp.data.data;
    return product;
  };
const SingleProduct = () => {
  const product = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const addToCart = () => {
    const theItem = {
      cartID: product.id + activeColor,
      productID: product.id,
      title,
      price,
      image,
      color: activeColor,
      company,
      amount,
    };
    dispatch(addItem(theItem));
  };
  const toggleAmount = (type) => {
    if (type === "inc") {
      setAmount(amount + 1);
    } else if (type === "dec") {
      setAmount((amount) => {
        return amount > 1 ? amount - 1 : 1;
      });
    }
  };
  return (
    <section>
      <BreadCrumbs links={["products"]} />
      <div className="my-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 ">
        <img src={image} alt={title} className=" rounded-xl h-96 w-96" />
        <div className="grid">
          <h2 className="text-3xl font-bold capitalize tracking-tight">
            {title}
          </h2>
          <h4 className="text-xl font-bold capitalize mt-2">{company}</h4>
          <h4 className="text-xl mt-3">{formatPrice(price)}</h4>
          <p className="leading-8 mt-6">{description}</p>
          <div className="mt-6">
            <h4 className="text-lg font-semibold">colors</h4>
            <div className="flex gap-x-2 mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setActiveColor(color);
                    }}
                    className={`badge w-5 h-5
                      ${activeColor === color && "border-2 border-primary"}
                        `}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Amount</h4>
            <AmountBts
              amount={amount}
              toggleAmount={toggleAmount}
              className="mt-2"
            />
          </div>
          <div className="mt-10 ">
            <button className="btn btn-primary btn-md" onClick={addToCart}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
