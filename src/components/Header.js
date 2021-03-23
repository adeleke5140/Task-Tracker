import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className="header">
      <h1 className={showAdd ? "open" : "closed"}>{title}</h1>
      <Button onClick={onAdd} showAdd={showAdd} color={showAdd ? "red" : ""} />
    </div>
  );
};

export default Header;
