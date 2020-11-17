import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="row center-xs">
      <div className="layout col-xs-9">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
