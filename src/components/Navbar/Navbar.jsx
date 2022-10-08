import React from "react";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="Logo.svg" />
        <div class="navigation">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
