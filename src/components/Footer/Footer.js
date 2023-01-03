import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div>TOuhApp</div>
      <div>
        &copy; 2023{" "}
        <span className="text-accent animate-pulse">
          <a href="https://github.com/TahenyBELGUITH">Taheny Belguith</a>
        </span>{" "}
        . All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
