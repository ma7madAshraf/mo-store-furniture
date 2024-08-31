const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <label className={`form-control`} htmlFor={name}>
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <select
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
        name={name}
        id={name}
      >
        {list.map((opt) => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default FormSelect;
