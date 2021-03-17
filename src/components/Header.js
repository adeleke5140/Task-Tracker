import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button onClick={onAdd} showAdd={showAdd} />
    </div>
  );
};

export default Header;
