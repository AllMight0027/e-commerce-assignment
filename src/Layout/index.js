import React from "react";
import "./styles.css";

const Layout = (props) => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <a href="/">Fake Commerce</a>
        <nav>
          <a href="/cart" style={{ fontWeight: "bold" }}>
            Cart
          </a>
        </nav>
      </header>

      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
