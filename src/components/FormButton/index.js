import "./FormButton.css";

const FormButton = (props) => {
  return (
    <div>
      <button className="form-button">{props.text}</button>
    </div>
  );
};

export default FormButton;
