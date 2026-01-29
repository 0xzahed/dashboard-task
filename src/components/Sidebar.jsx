import { NavLink } from "react-router-dom";
import { Home, Phone, Calendar, Settings, Zap, LogOut } from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`w-[250px] h-screen bg-[#0f1c3f] flex flex-col fixed left-0 top-0 py-5 sidebar-shadow z-40 transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex-1 flex flex-col">
        {/* Logo */}
        <div className="flex justify-center items-center mb-10">
          <div
            className="w-[50px] h-[50px] flex items-center justify-center text-[#0f1c3f]"
            style={{
              borderRadius: "14px",
              background:
                "linear-gradient(180deg, rgba(0, 255, 136, 1), rgba(0, 212, 255, 1) 100%)",
            }}
          >
            <Zap size={28} />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-2 px-3">
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                isActive
                  ? "bg-white/10 text-white nav-item-active"
                  : "text-[#8b92b0] hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Home size={20} className="flex-shrink-0" />
            <span>Dashboard Overview</span>
          </NavLink>

          <NavLink
            to="/call-logs"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                isActive
                  ? "bg-white/10 text-white nav-item-active"
                  : "text-[#8b92b0] hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Phone size={20} className="flex-shrink-0" />
            <span>Call Logs</span>
          </NavLink>

          <NavLink
            to="/appointments"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                isActive
                  ? "bg-white/10 text-white nav-item-active"
                  : "text-[#8b92b0] hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Calendar size={20} className="flex-shrink-0" />
            <span>Appointments</span>
          </NavLink>

          <NavLink
            to="/settings"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                isActive
                  ? "bg-white/10 text-white nav-item-active"
                  : "text-[#8b92b0] hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Settings size={20} className="flex-shrink-0" />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="px-3 mt-auto">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-transparent border-none text-[#ff4444] text-[15px] font-medium cursor-pointer transition-all duration-300 hover:bg-[#ff4444]/10 hover:text-[#ff5555]">
          <LogOut size={20} className="flex-shrink-0" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
