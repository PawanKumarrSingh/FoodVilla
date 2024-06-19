import { useState } from "react";
import logo from "../../assets/foodvilla.png";

const Title = () => (
  <a href="www.google.com" target="blank">
    <img src={logo} key={logo} id="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="navbar">
      <Title />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Login" : "Logout"}
      </button>
    </div>
  );
};

export default Header;
