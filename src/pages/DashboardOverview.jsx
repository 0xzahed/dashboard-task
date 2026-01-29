import { motion } from "framer-motion";
import {
  Bell,
  Phone,
  Repeat,
  Calendar,
  Bot,
  XCircle,
  Clock,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardOverview = () => {
  // Sample data for the chart
  const chartData = [
    { day: "Mon", calls: 65 },
    { day: "Tue", calls: 78 },
    { day: "Wed", calls: 70 },
    { day: "Thu", calls: 85 },
    { day: "Fri", calls: 95 },
    { day: "Sat", calls: 105 },
    { day: "Sun", calls: 90 },
  ];

  const stats = [
    {
      title: "Total Calls Today",
      value: "127",
      change: "+12%",
      icon: Phone,
      iconBg: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)",
      isPositive: true,
    },
    {
      title: "AI-Handled Calls",
      value: "98",
      change: "+77%",
      icon: Bot,
      iconBg:
        "linear-gradient(135deg, rgba(173, 70, 255, 1) 0%, rgba(246, 51, 154, 1) 100%)",
      isPositive: true,
    },
    {
      title: "Warm Transfer",
      value: "23",
      change: "+18%",
      icon: Repeat,
      iconBg:
        "linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgba(251, 44, 54, 1) 100%)",
      isPositive: true,
    },
    {
      title: "Appointments Booked",
      value: "34",
      change: "+8%",
      icon: Calendar,
      iconBg: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      isPositive: true,
    },
    {
      title: "Missed/Failed Calls",
      value: "6",
      change: "-9%",
      icon: XCircle,
      iconBg: "linear-gradient(135deg, #ef4444 0%, #f87171 100%)",
      isPositive: false,
    },
    {
      title: "Avg Call Duration",
      value: "3:42",
      change: "+15%",
      icon: Clock,
      iconBg: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
      isPositive: true,
    },
  ];

  return (
    <div
      className="p-4 sm:p-6 lg:p-8"
      style={{
        width: "100%",
        minHeight: "100vh",
        boxSizing: "border-box",
        background:
          "linear-gradient(137.23deg, rgba(2, 6, 24, 1) -34.38%, rgba(22, 37, 86, 1) 54.595%, rgba(15, 23, 43, 1) 143.569%)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between mb-6 sm:mb-8 -mx-4 sm:-mx-6 lg:-mx-8 -mt-4 sm:-mt-6 lg:-mt-8 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pt-16 lg:pt-4"
        style={{ background: "rgba(17, 27, 60, 1)" }}
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
          Dashboard Overview
        </h1>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="relative p-1.5 sm:p-2 text-gray-300 hover:text-white transition-colors">
            <Bell size={20} className="sm:w-6 sm:h-6" />
          </button>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
            <img
              src="/profile.png"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-4 sm:p-5 lg:p-6 flex items-start justify-between"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(43, 127, 255, 0.2)",
                borderRadius: "16px",
                background: "rgba(15, 23, 43, 0.5)",
              }}
            >
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
                  {stat.title}
                </p>
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  {stat.value}
                </h3>
                <p
                  className={`text-sm ${stat.isPositive ? "text-green-400" : "text-red-400"}`}
                >
                  {stat.change}
                </p>
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "14px",
                  background: stat.iconBg,
                }}
                className="sm:w-12 sm:h-12"
              >
                <Icon size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="p-4 sm:p-5 lg:p-6 pb-1"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "16px",
          boxSizing: "border-box",
          borderRadius: "16px",
          background: "rgba(15, 23, 43, 0.5)",
        }}
      >
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <div>
            <h2 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-1">
              Call Trends - This Week
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">Total: 472 calls</p>
          </div>
          <button
            className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors px-3 sm:px-4 py-2 sm:py-2.5"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(43, 127, 255, 0.2)",
              borderRadius: "10px",
              background: "rgba(29, 41, 61, 1)",
              cursor: "pointer",
            }}
          >
            This Week ▼
          </button>
        </div>

        <ResponsiveContainer
          width="100%"
          height={200}
          className="sm:h-[250px] lg:h-[280px]"
        >
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="rgba(59, 130, 246, 1)"
                  stopOpacity={0.95}
                />
                <stop
                  offset="40%"
                  stopColor="rgba(59, 130, 246, 0.7)"
                  stopOpacity={1}
                />
                <stop
                  offset="100%"
                  stopColor="rgba(30, 58, 138, 0.1)"
                  stopOpacity={1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="0"
              stroke="rgba(100, 116, 139, 0.15)"
              vertical={false}
              horizontal={true}
            />
            <XAxis
              dataKey="day"
              stroke="#7C8DA8"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "11px" }}
              className="sm:text-xs lg:text-sm"
              dy={5}
            />
            <YAxis
              stroke="#7C8DA8"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "11px" }}
              className="sm:text-xs lg:text-sm"
              domain={[0, 120]}
              ticks={[0, 30, 60, 90, 120]}
              dx={-5}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(15, 23, 43, 0.95)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                borderRadius: "8px",
                color: "#fff",
                padding: "8px 12px",
              }}
              labelStyle={{ color: "#9CA3AF", marginBottom: "4px" }}
              itemStyle={{ color: "#3b82f6" }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#3b82f6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorCalls)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Bottom Section - Recent Activity & Top Repair Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="p-4 sm:p-5 lg:p-6"
          style={{
            boxSizing: "border-box",
            borderRadius: "16px",
            background: "rgba(15, 23, 43, 0.5)",
          }}
        >
          <h2 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6">
            Recent Activity
          </h2>
          <div className="flex flex-col gap-2 sm:gap-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(43, 127, 255, 0.2)",
                borderRadius: "10px",
                background: "rgba(29, 41, 61, 0.5)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-200 text-xs sm:text-sm">
                  AI booked appointment for iPhone 13 screen repair
                </p>
                <p className="text-gray-500 text-xs mt-0.5 sm:mt-1">
                  2 min ago
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="flex items-start gap-3 p-3"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(43, 127, 255, 0.2)",
                borderRadius: "10px",
                background: "rgba(29, 41, 61, 0.5)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-gray-200 text-sm">
                  Warm transfer to technician - Software issue
                </p>
                <p className="text-gray-500 text-xs mt-1">5 min ago</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.0 }}
              className="flex items-start gap-3 p-3"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(43, 127, 255, 0.2)",
                borderRadius: "10px",
                background: "rgba(29, 41, 61, 0.5)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-gray-200 text-sm">
                  Quote provided for iPad battery replacement
                </p>
                <p className="text-gray-500 text-xs mt-1">8 min ago</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.1 }}
              className="flex items-start gap-3 p-3"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgba(43, 127, 255, 0.2)",
                borderRadius: "10px",
                background: "rgba(29, 41, 61, 0.5)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-gray-200 text-sm">
                  Call dropped after 12 seconds
                </p>
                <p className="text-gray-500 text-xs mt-1">15 min ago</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Top Repair Requests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="p-4 sm:p-5 lg:p-6"
          style={{
            boxSizing: "border-box",
            borderRadius: "16px",
            background: "rgba(15, 23, 43, 0.5)",
          }}
        >
          <h2 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6">
            Top Repair Requests
          </h2>
          <div className="flex flex-col gap-4 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                <p className="text-gray-300 text-xs sm:text-sm">
                  Screen Repair
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">156 requests</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-300 text-sm">Battery Replacement</p>
                <p className="text-gray-400 text-sm">89 requests</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                  style={{ width: "48%" }}
                ></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.0 }}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-300 text-sm">Back Glass Repair</p>
                <p className="text-gray-400 text-sm">67 requests</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                  style={{ width: "36%" }}
                ></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-300 text-sm">Software Issues</p>
                <p className="text-gray-400 text-sm">45 requests</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                  style={{ width: "24%" }}
                ></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardOverview;
