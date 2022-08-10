const Button = () => {
  return (
    <button className={customClassName} onClick={props.handleClick}>
      {" "}
      {props.children}{" "}
    </button>
  );
};

export default Button;
