import Button from "./Button";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button />
    </div>
  );
};

export default Header;
