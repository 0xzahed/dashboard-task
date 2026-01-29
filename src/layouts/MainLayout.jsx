import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="ml-[250px] flex-1 p-10 bg-[#f5f6fa] min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
