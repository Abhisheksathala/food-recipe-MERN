import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.svg";
import Button from "@mui/material/Button";

const Navbar = () => {
  const menuItems = ["Recipes", "Resources", "About", "Contact", ""];

  return (
    <nav className="  backdrop-sepia bg-white/30 p-4 flex h-16 px-6 items-center justify-between">
      <a href="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-4" />
      </a>
      <ul className="flex items-center justify-between gap-6 space-x-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={`/${item.toLowerCase()}`}
              className="text-black font-medium flex hover:bg-red-400 px-3 py-2 rounded transition-colors duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className="login__signup__section gap-4 flex ">
        <Button color="error" variant="contained" href="/login">
          Login
        </Button>

        <Button variant="contained" href="/signup">
          signup
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
