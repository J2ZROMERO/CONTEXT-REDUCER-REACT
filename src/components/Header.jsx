import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to={"/"}>
          <h1>My React App</h1>
        </Link>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
