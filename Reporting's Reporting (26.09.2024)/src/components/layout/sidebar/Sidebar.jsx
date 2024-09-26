import React from "react";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import "./sidebar.css"

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <div>
      <Sider class="bg-[#ffffff] text-lg font-semibold sider w-[189px] h-screen pl-[22px] text-[18px]">
        <br />
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white h-[45px] w-[150px] bg-[#1F405A] border-[#1F405A] text-center flex items-center justify-center rounded-md mb-3"
              : "text-[grey] border-[grey] h-[45px] w-[150px] text-center flex items-center justify-center rounded-md mb-3"
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white h-[45px] w-[150px] bg-[#1F405A] border-[#1F405A] text-center flex items-center justify-center rounded-md mb-3"
              : "text-[grey] border-[grey] h-[45px] w-[150px] text-center flex items-center justify-center rounded-md mb-3"
          }
          to="/reporting"
        >
          Reporting
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "custom-navlink text-white h-[45px] w-[150px] bg-[#1F405A] border-[#1F405A] text-center flex items-center justify-center rounded-md "
              : "custom-navlink text-[grey] border-[grey] h-[45px] w-[150px] text-center flex items-center justify-center rounded-md mb-3"
          }
          to="/goals"
        >
          Goals
        </NavLink>
      </Sider>
    </div>
  );
};

export default Sidebar;


