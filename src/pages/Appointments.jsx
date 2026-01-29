import { useState } from "react";
import { motion } from "framer-motion";
import {
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  CircleCheck,
  Clock,
} from "lucide-react";

const statsData = [
  {
    id: 1,
    title: "Total Booked",
    value: "34",
    subtitle: "+8 this week",
    subtitleColor: "#10B981",
    icon: CalendarDays,
    iconColor: "#3B82F6",
  },
  {
    id: 2,
    title: "AI Booked",
    value: "28",
    subtitle: "82% of total",
    subtitleColor: "#94A3B8",
    icon: CircleCheck,
    iconColor: "#10B981",
  },
  {
    id: 3,
    title: "Pending",
    value: "3",
    subtitle: "Awaiting confirmation",
    subtitleColor: "#94A3B8",
    icon: Clock,
    iconColor: "#FBBF24",
  },
];

const appointmentsData = [
  {
    id: 1,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "09:00",
  },
  {
    id: 2,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "10:00",
  },
  {
    id: 3,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "11:00",
  },
  {
    id: 4,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "12:00",
  },
  {
    id: 5,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "02:00",
  },
  {
    id: 6,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: 1,
    startTime: "03:00",
  },
];

function AppointmentStats() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="p-4 sm:p-5 rounded-2xl"
          style={{
            background: "rgba(15, 23, 43, 0.5)",
            border: "1px solid rgba(43, 127, 255, 0.2)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <stat.icon size={18} style={{ color: stat.iconColor }} />
            <p className="text-slate-400 text-sm">{stat.title}</p>
          </div>
          <p className="text-2xl sm:text-3xl text-white mb-1">{stat.value}</p>
          <p className="text-sm" style={{ color: stat.subtitleColor }}>
            {stat.subtitle}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function BookingLink() {
  const [copied, setCopied] = useState(false);
  const bookingUrl = "https://techstore.com/book?id=store123";

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="p-4 sm:p-5 rounded-2xl"
      style={{
        background: "rgba(15, 23, 43, 0.5)",
      }}
    >
      <p className="text-white mb-3 sm:mb-4 text-sm sm:text-base">
        Booking Link
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div
          className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-slate-300 text-xs sm:text-sm break-all"
          style={{
            background: "rgba(10, 18, 42, 0.8)",
            border: "1px solid rgba(43, 127, 255, 0.2)",
          }}
        >
          {bookingUrl}
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2 sm:py-3 rounded-xl flex items-center justify-center gap-2 text-white text-xs sm:text-sm transition-all hover:opacity-90 w-full sm:w-auto"
          style={{
            background:
              "linear-gradient(180deg, rgba(21, 34, 82, 1) 0%, rgba(17, 27, 60, 1) 100%)",
            boxShadow: "inset 0px 1px 10px 1px rgba(210, 234, 255, 1)",
            border: "1px solid rgba(43, 127, 255, 0.3)",
          }}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </motion.div>
  );
}

function AppointmentsTable() {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 11;

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 2);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(15, 23, 43, 0.5)",
          border: "1px solid rgba(43, 127, 255, 0.2)",
        }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(43, 127, 255, 0.2)" }}>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Client Name
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Client Phone
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Client mail
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Device
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Repair Type
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Date
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Slot no
                </th>
                <th className="font-normal px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                  Start Time
                </th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((appointment, index) => (
                <tr
                  key={appointment.id}
                  style={{
                    borderBottom:
                      index < appointmentsData.length - 1
                        ? "1px solid rgba(43, 127, 255, 0.1)"
                        : "none",
                  }}
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-blue-400 text-center whitespace-nowrap">
                    {appointment.clientName}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap">
                    {appointment.clientPhone}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white text-center whitespace-nowrap">
                    {appointment.clientMail}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap">
                    {appointment.device}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap">
                    {appointment.repairType}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap">
                    {appointment.date}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap">
                    {appointment.slotNo}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-300 text-center whitespace-nowrap">
                    {appointment.startTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="flex items-center justify-center gap-1 sm:gap-2 py-3 sm:py-4 flex-wrap">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors disabled:opacity-50"
        >
          <ChevronLeft size={14} className="sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
            disabled={page === "..."}
            className={`w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm transition-colors ${
              page === currentPage
                ? "bg-[#a7c8fe] text-[#001d6b]"
                : "text-[#0f62fe]"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-50"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>
    </>
  );
}

function Appointments() {
  return (
    <div
      className="min-h-screen p-4 sm:p-6 lg:p-8"
      style={{
        background:
          "linear-gradient(137.23deg, rgba(1.89, 5.94, 23.59, 1) -34.38%, rgba(22.25, 36.5, 85.6, 1) 54.595%, rgba(15, 23, 43, 1) 143.569%)",
      }}
    >
      <div className="space-y-4 sm:space-y-6">
        <AppointmentStats />
        <BookingLink />
        <AppointmentsTable />
      </div>
    </div>
  );
}

export default Appointments;
