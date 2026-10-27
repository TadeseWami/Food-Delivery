import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const { token, admin, setAdmin, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    setToken("");
    setAdmin(false);

    toast.success("Logout Successfully");
    navigate("/");
  };

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />

      <div className="profile-container">
        <img
          className="profile"
          src={assets.profile_image}
          onClick={() => setShowMenu(!showMenu)}
          alt=""
        />

        {showMenu && (
          <ul className="profile-dropdown">
            {token && admin ? (
              <li onClick={logout}>Logout</li>
            ) : (
              <li onClick={() => navigate("/")}>Login</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
