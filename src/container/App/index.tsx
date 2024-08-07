import { Outlet } from "react-router";
import { useState } from "react";
import TopBar from "../../components/shared/Topbar";
import LeftSideBar from "../../components/shared/LeftSidebar";

const Container = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <>
      <TopBar toggleSideBar={toggleSideBar} />
      <div className="flex">
        <LeftSideBar isSideBarOpen={isSideBarOpen} />
        <main className="w-full pt-16">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Container;
