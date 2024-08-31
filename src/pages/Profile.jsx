import React from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import OrderStat from "../components/OrderStat";
import { formatPrice } from "../utils";

const Profile = () => {
  const { orders, meta } = useLoaderData();
  const user = useSelector((store) => store.user.user);
  const { username, email, createdAt } = user;

  const totalItems = orders.reduce((total, order) => {
    total += order.attributes.numItemsInCart;
    return total;
  }, 0);
  const totalSpending = orders.reduce((total, order) => {
    const orderTotal = Number(
      order.attributes.orderTotal.replace(/[^0-9]/g, "")
    );
    total += orderTotal;
    return total;
  }, 0);

  return (
    <section>
      <div className="card bg-base-200  ">
        <div className="card-body text-xs ">
          <p className="flex justify-between  border-b pb-2 border-base-300">
            {" "}
            <span className="capitalize">username</span>{" "}
            <span className="text-secondary">{username}</span>
          </p>{" "}
          <p className="flex justify-between  border-b pb-2 border-base-300">
            {" "}
            <span className="capitalize">email</span>{" "}
            <span className="text-secondary">{email}</span>
          </p>{" "}
          <p className="flex justify-between  border-b pb-2 border-base-300">
            {" "}
            <span className="capitalize"> created</span>{" "}
            <span className="text-secondary">{createdAt.substring(0, 10)}</span>
          </p>{" "}
          <p className="flex justify-between  border-b pb-2 border-base-300">
            {" "}
            <span className="capitalize"> total orders</span>{" "}
            <span className="text-secondary">{meta.pagination.total}</span>
          </p>{" "}
          <p className="flex justify-between  border-b pb-2 border-base-300">
            {" "}
            <span className="capitalize"> total items purchased</span>{" "}
            <span className="text-secondary">{totalItems}</span>
          </p>{" "}
          <p className="flex justify-between  border-b pb-2 border-base-300">
            {" "}
            <span className="capitalize"> total spending</span>{" "}
            <span className="text-secondary">{formatPrice(totalSpending)}</span>
          </p>{" "}
        </div>
      </div>
      <h2 className=" btn btn-outline btn-accent uppercase text-3xl font-bold  w-fit block mx-auto my-6 ">
        orders info
      </h2>
      <OrderStat />
    </section>
  );
};

export default Profile;
