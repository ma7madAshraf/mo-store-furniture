const FormCheckbox = ({ label, name, size, defaultValue }) => {
  return (
    <div className="form-control">
      <label
        className="label cursor-pointer flex flex-col justify-center gap-y-2 "
        htmlFor="label"
      >
        <span className="label-text capitalize">{label}</span>
        <input
          type="checkbox"
          name={name}
          id={name}
          defaultChecked={defaultValue}
          className={`checkbox checkbox-secondary ${size}`}
        />
      </label>
    </div>
  );
};

export default FormCheckbox;
