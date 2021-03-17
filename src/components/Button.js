const Button = ({ onClick, showAdd }) => {
  return (
    <button onClick={onClick} className="btn">
      {showAdd ? "Close" : "Open"}
    </button>
  );
};

export default Button;
