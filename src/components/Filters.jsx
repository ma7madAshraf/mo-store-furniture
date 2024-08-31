import FormInput from "./FormInput";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const filters = () => {
  const { meta, searchParams } = useLoaderData();
  const { category, company, price, order, search, shipping } = searchParams;

  return (
    <Form className="bg-base-200 rounded-lg p-6 grid gap-x-3 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        label="search product"
        name="search"
        defaultValue={search}
        type="text"
        size="input-sm"
      />
      <FormSelect
        label="select category"
        name="category"
        defaultValue={category}
        list={meta.categories}
        size="select-sm"
      />
      <FormSelect
        label="select company"
        name="company"
        defaultValue={company}
        list={meta.companies}
        size="select-sm"
      />
      <FormSelect
        label="sort by"
        name="order"
        defaultValue={order}
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      />
      <FormRange label="select price" name="price" price={price} />
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button className="btn btn-primary uppercase btn-sm"> search</button>
      <Link to="/products" className="btn btn-secondary uppercase btn-sm">
        Reset
      </Link>
    </Form>
  );
};

export default filters;
