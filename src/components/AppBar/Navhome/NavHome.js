import React from "react";
import { FaTrello } from "react-icons/fa";
import "./NavHome.scss";

const NavHome = () => {
  return (
    <div className="nav-home">
      <FaTrello style={{ fontSize: "18px", marginRight: "3px" }} />
      Trello
    </div>
  );
};

export default NavHome;
