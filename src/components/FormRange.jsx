import { useState } from "react";
import { formatPrice } from "../utils";

const FormRange = ({ label, name, price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  const handleChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  return (
    <label className="form-control w-full max-w-xs mx-auto" htmlFor={name}>
      <div className="label">
        <span className="label-text capitalize">{label}</span>
        <span className="label-text-alt">{formatPrice(selectedPrice)}</span>
      </div>
      <input
        type="range"
        name={name}
        id={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={handleChange}
        className="range range-primary range-sm"
      />
      <div className="label font-bold">
        <span className="label-text-alt">0</span>
        <span className="label-text-alt">Max:{formatPrice(maxPrice)}</span>
      </div>
    </label>
  );
};

export default FormRange;
