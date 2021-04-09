import "./navBar.scss";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <h2>CufaStore</h2>
      <ul className="navbarMenu">
        <li className="navbarItem">
          <a href="#">Home</a>
        </li>
        <li className="navbarItem dropdown">
          <a href="#">Categories</a>
        </li>
        <li className="navbarItem">
          <a href="#">Contact</a>
        </li>
        <li className="navbarItem">
          <a href="#">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
