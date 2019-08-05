import React from "react";
import "../../media/icons/shopping-cart-solid.svg";

function Header() {
  return (
    <div className="header">
      <div className="title-slogan">
        <h1 className="title">
          <i className="fas fa-shoe-prints" /> Mama Ng'ash Shoe Shop{" "}
          <i className="fas fa-shoe-prints last" />
        </h1>
        <h2 className="slogan">
          Check out your favorite shoes here at an affordable price
        </h2>
      </div>
    </div>
  );
}

export default Header;
