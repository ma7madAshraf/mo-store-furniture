import { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";

const productsContainer = () => {
  const { meta } = useLoaderData();
  const [view, setView] = useState("grid");

  return (
    <>
      <div className="flex justify-between border-b-2 mt-6">
        <h4>{meta.pagination.total} products</h4>
        <div className=" flex gap-x-2 pb-5">
          <button
            className={`${
              view === "grid" ? "btn-primary" : "btn-block"
            } btn  text-xl btn-sm btn-circle   rounded-full`}
            onClick={() => setView("grid")}
          >
            <BsFillGridFill className="" />
          </button>
          <button
            className={`${
              view === "list" ? "btn-primary" : "btn-block"
            } btn  text-xl btn-sm btn-circle   rounded-full`}
            onClick={() => setView("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {meta.pagination.total === 0 && (
        <h5 className="text-2xl mt-16">
          Sorry, no products matched your search...
        </h5>
      )}
      {view === "grid" && <ProductsGrid />}
      {view === "list" && <ProductsList />}
    </>
  );
};

export default productsContainer;
