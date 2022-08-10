const Button = (props) => {
  const buttonEnableDisable = !props.isDisabled
    ? styles.buttonEnabled
    : styles.buttonEnabled;
  return (
    <button
      id={props.id}
      className={`button ${buttonEnableDisable}`}
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};

const styles = {
  buttonEnabled:
    "block w-[7rem] my-0 mx-auto border border border-solid border-[primary] rounded-2xl",
  buttonDisabled: "",
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;
