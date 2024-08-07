import { Outlet } from "react-router";
import TopBar from "../../component/shared/Topbar";
import LeftSidebar from "../../component/shared/LeftSidebar";
import { useState } from "react";

const Container = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <>
      <TopBar toggleSideBar={toggleSideBar} />
      <div className="flex">
        <LeftSidebar isSideBarOpen={isSideBarOpen} />
        <main className="w-full pt-16">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Container;
