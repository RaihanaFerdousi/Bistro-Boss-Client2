import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location)
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp') || location.pathname.includes('dashbored');
  return (
    <div>
      <div>
        { noHeaderFooter || <Navbar />}
        <Outlet />
      </div>
      { noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
