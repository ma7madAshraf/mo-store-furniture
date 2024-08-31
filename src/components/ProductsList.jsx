import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 grid-col-1">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card card-compact flex flex-col gap-y-4 flex-wrap sm:flex-row items-start p-8 justify-between bg-base-100 w-full shadow-xl hover:shadow-2xl transition duration-300 "
          >
            <figure className="">
              <img
                src={image}
                alt={title}
                className="rounded-xl w-32 h-32 object-cover "
              />
            </figure>
            <div className=" text-lg items-center  ml-0 sm:ml-16 text-center">
              <h2 className="card-title text-lg capitalize tracking-tight font-medium ">
                {title}
              </h2>
              <h2 className="card-title capitalize tracking-tight font-medium text-neutral-content ">
                {company}
              </h2>
            </div>
            <p className="text-secondary ml-0 sm:ml-auto">
              {formatPrice(price)}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
