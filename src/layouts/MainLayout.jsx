import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div
        className="ml-[250px] flex-1 min-h-screen"
        style={{
          background:
            "linear-gradient(137.23deg, rgba(2, 6, 24, 1) -34.38%, rgba(22, 37, 86, 1) 54.595%, rgba(15, 23, 43, 1) 143.569%)",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
