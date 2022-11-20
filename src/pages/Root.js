import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Navbar";

const Root = () => {
  return (
    <div className='page-wrap'>
      <Header />
      <div className='page-content container'>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
