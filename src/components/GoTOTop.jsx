import React from "react";
import { Link } from "react-router-dom";

const GoTOTop = () => {
  return (
    <div>
      <div className="go-to-top">
        <Link to="/">
          <i className="fa-solid fa-angle-up"></i>
        </Link>
      </div>
    </div>
  );
};

export default GoTOTop;
