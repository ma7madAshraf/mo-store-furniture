import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, toggleAmount, size }) => {
  return (
    <div className={`flex gap-x-2 ${size}`}>
      <button onClick={() => toggleAmount("dec")} className="amount-btn">
        <FaMinus />
      </button>
      <h2 className={`text-3xl ${size} font-bold`}>{amount}</h2>
      <button onClick={() => toggleAmount("inc")} className="amount-btn">
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
