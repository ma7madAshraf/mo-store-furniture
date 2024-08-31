import { SubmitBtn, FormInput } from "../components";
import { Form } from "react-router-dom";
import { useSelector } from "react-redux";

import Map from "./Map";

const ShippingInfo = () => {
  const address = useSelector((store) => store.user.address);
  const user = useSelector((store) => store.user.user);
  return (
    <Form className="flex flex-col gap-y-6" method="POST">
      <h2 className="text-xl font-semibold ">shipping information</h2>
      <FormInput
        label="first name"
        name="name"
        defaultValue={user.username}
        type="text"
      />
      <FormInput
        label="address"
        name="address"
        type="text"
        defaultValue={address}
      />{" "}
      <div className="hidden sm:block">
        <h4 className="text-xs text-secondary text-center">
          {" "}
          Click the map to auto detected your location
        </h4>
        <Map />
      </div>
      <SubmitBtn text="place your order" />
    </Form>
  );
};

export default ShippingInfo;
