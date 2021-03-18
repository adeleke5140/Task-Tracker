const Button = ({ color, onClick, showAdd }) => {
  return (
    <button
     onClick={onClick} 
     className='btn'
     style ={{ backgroundColor: color}}
     >
    {showAdd ? "Close" : "Add"}
    </button>
  );
};

export default Button;
