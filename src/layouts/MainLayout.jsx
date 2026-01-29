import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-[100] lg:hidden p-2 rounded-lg text-white transition-all hover:bg-white/10"
        style={{
          background: "rgba(15, 28, 63, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div
        className="ml-0 lg:ml-[250px] flex-1 min-h-screen"
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
