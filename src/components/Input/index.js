import "./Input.css";

const Input = (props) => {
  const handleChange = (e) => {
    props.setValue(e.target.value);
  };
  const { type = "text" } = props;
  const modPlaceholder = props.placeholder + "...";

  return (
    <div className={`input`}>
      <label>{props.title}</label>
      <input
        placeholder={modPlaceholder}
        required={props.required}
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};

export default Input;
