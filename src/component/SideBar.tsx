import React from "react";
import { Link, Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <ul>
        <Link to={"/myday"}>My day</Link>
        <Link to={"/important"}>Important</Link>
        <Link to={"/planned"}>Planned</Link>
        <Link to={"/tasks"}>Tasks</Link>
      </ul>
      <Outlet />
    </div>
  );
}

export default SideBar;
