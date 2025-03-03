import React from "react";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <div className="bg-[#f3f6ff] w-full">
      <div className="max-w-[1400px] m-auto">
        <nav className="bg-white"> test</nav>
        <Outlet />
      </div>
    </div>
  );
};

export default MainTemplate;
