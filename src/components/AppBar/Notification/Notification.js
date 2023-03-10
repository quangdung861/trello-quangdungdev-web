import React from "react";
import { FiBell } from "react-icons/fi";

import "./Notification.scss";
const Notification = () => {
  return (
    <div className="notification" title="Thông báo">
      <FiBell style={{ fontSize: "18px" }} />
    </div>
  );
};

export default Notification;
