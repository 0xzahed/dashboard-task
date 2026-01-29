import { useState, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  Phone,
  Clock,
  CheckCircle,
  PlayCircle,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

const typeOptions = ["All Type", "Inbound", "Outbound", "Missed"];
const issueOptions = [
  "All Issues",
  "Screen Repair",
  "Battery Replacement",
  "Software Issues",
  "Back Glass Repair",
];
const dateOptions = [
  "Today",
  "Yesterday",
  "This Week",
  "This Month",
  "This Year",
];

const callsData = [
  {
    id: 1,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    statusColor: "#10B981",
    outcome: "Quote Provided",
    issueType: "Screen Repair",
  },
  {
    id: 2,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Warm Transfer",
    statusColor: "#F97316",
    outcome: "Escalated to technician",
    issueType: "Software Issues",
  },
  {
    id: 3,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Appointment",
    statusColor: "#3B82F6",
    outcome: "Appointment Booked",
    issueType: "Battery Replacement",
  },
  {
    id: 4,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "0:20",
    status: "Dropped",
    statusColor: "#EF4444",
    outcome: "Call Dropped",
    issueType: "Unknown",
  },
  {
    id: 5,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    statusColor: "#10B981",
    outcome: "Quote Provided",
    issueType: "Screen Repair",
  },
];

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm text-white flex items-center gap-1.5 sm:gap-2 min-w-24 sm:min-w-30 justify-between"
        style={{
          background: "rgba(17, 27, 60, 0.8)",
        }}
      >
        {value}
        <ChevronDown
          size={14}
          className={`sm:w-4 sm:h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 py-2 w-full min-w-37.5 rounded-lg shadow-xl z-50"
          style={{
            background: "rgba(17, 27, 60, 0.95)",
            border: "1px solid rgba(43, 127, 255, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                value === option
                  ? "text-blue-400 bg-white/10"
                  : "text-white hover:bg-white/5"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function CallList({ calls, selectedCall, onSelectCall }) {
  return (
    <div
      className="rounded-2xl h-full"
      style={{
        background: "rgba(15, 23, 43, 0.5)",
        border: "1px solid rgba(43, 127, 255, 0.2)",
      }}
    >
      <h3
        className="text-base sm:text-lg text-white p-3 sm:p-4"
        style={{ borderBottom: "1px solid rgba(43, 127, 255, 0.2)" }}
      >
        Call List
      </h3>

      <div className="space-y-2 sm:space-y-3">
        {calls.map((call, index) => (
          <motion.div
            key={call.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            onClick={() => onSelectCall && onSelectCall(call)}
            className="p-3 sm:p-4 cursor-pointer"
            style={{
              borderBottom:
                selectedCall?.id === call.id
                  ? "3px solid rgba(43, 127, 255, 1)"
                  : "3px solid transparent",
            }}
          >
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                  }}
                >
                  <Phone
                    size={16}
                    className="sm:w-[18px] sm:h-[18px] text-white"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm sm:text-base text-white truncate">
                    {call.phoneNumber}
                  </p>
                  <p className="text-xs text-slate-400">
                    {call.date} • {call.time}
                  </p>
                </div>
              </div>
              <span
                className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs whitespace-nowrap flex-shrink-0"
                style={{
                  background: `${call.statusColor}20`,
                  color: call.statusColor,
                  border: `1px solid ${call.statusColor}40`,
                }}
              >
                {call.status}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1 sm:gap-1.5 text-slate-400">
                <Clock size={12} className="sm:w-[14px] sm:h-[14px]" />
                <span>{call.duration}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 text-slate-400">
                <CheckCircle size={12} className="sm:w-[14px] sm:h-[14px]" />
                <span>{call.outcome}</span>
              </div>
              <span
                className="px-2 sm:px-2.5 py-0.5 rounded-md text-xs"
                style={{
                  background: "rgba(43, 127, 255, 0.15)",
                  color: "#60A5FA",
                }}
              >
                {call.issueType}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CallDetails({ call }) {
  if (!call) {
    return (
      <div
        className="rounded-2xl h-full flex items-center justify-center"
        style={{
          background: "rgba(15, 23, 43, 0.5)",
          border: "1px solid rgba(43, 127, 255, 0.2)",
        }}
      >
        <p className="text-slate-400">Select a call to view details</p>
      </div>
    );
  }

  const transcript = [
    {
      role: "AI Assistant",
      message: "Thank you for calling UBreakiFix! How can I help you today?",
    },
    {
      role: "Customer",
      message:
        "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?",
    },
    {
      role: "AI Assistant",
      message:
        "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?",
    },
    { role: "Customer", message: "Yes, please! When are you available?" },
    {
      role: "AI Assistant",
      message:
        "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?",
    },
  ];

  return (
    <motion.div
      key={call.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl h-full overflow-hidden"
      style={{
        background: "rgba(15, 23, 43, 0.5)",
        border: "1px solid rgba(43, 127, 255, 0.2)",
      }}
    >
      <h3
        className="text-base sm:text-lg text-white p-3 sm:p-4"
        style={{ borderBottom: "1px solid rgba(43, 127, 255, 0.2)" }}
      >
        Call Details
      </h3>

      <div className="p-3 sm:p-4 space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <p className="text-xs text-slate-400 mb-1">Phone Number</p>
            <p className="text-white">{call.phoneNumber}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Duration</p>
            <p className="text-white ">{call.duration}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <p className="text-xs text-slate-400 mb-1">Date & Time</p>
            <p className="text-white ">
              {call.date} {call.time}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Issue Type</p>
            <p className="text-white ">{call.issueType}</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-slate-400 mb-1">Call Type</p>
          <span
            className="px-3 py-1 rounded-full text-xs  inline-block"
            style={{
              background: `${call.statusColor}20`,
              color: call.statusColor,
              border: `1px solid ${call.statusColor}40`,
            }}
          >
            {call.status}
          </span>
        </div>

        <div>
          <p className="text-xs text-slate-400 mb-1">Outcome</p>
          <p className="text-white ">{call.outcome}</p>
        </div>

        <button
          className="w-full py-2.5 sm:py-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#c27aff] transition-all hover:opacity-90"
          style={{
            background:
              "linear-gradient(90deg, rgba(172.87, 70.37, 255, 0.2), rgba(246.28, 50.53, 154.1, 0.2) 100%)",
            border: "1px solid rgba(173, 70, 255, 0.3)",
            borderRadius: "14px",
          }}
        >
          <PlayCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
          Play Audio Recording
        </button>

        <div>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <FileText
              size={16}
              className="sm:w-[18px] sm:h-[18px] text-slate-400"
            />
            <p className="text-sm sm:text-base text-white">
              Conversation Transcript
            </p>
          </div>

          <div
            className="space-y-3 sm:space-y-4 p-3 sm:p-4 rounded-xl"
            style={{
              background: "rgba(10, 18, 42, 0.5)",
            }}
          >
            {transcript.map((item, index) => (
              <div key={index}>
                <p
                  className="text-sm  mb-1"
                  style={{
                    color: item.role === "AI Assistant" ? "#10B981" : "#60A5FA",
                  }}
                >
                  {item.role}:
                </p>
                <p className="text-sm text-slate-300">{item.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CallLogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Type");
  const [selectedIssue, setSelectedIssue] = useState("All Issues");
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedCall, setSelectedCall] = useState(callsData[0]);

  return (
    <div
      className="min-h-screen p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8"
      style={{
        background:
          "linear-gradient(137.23deg, rgba(1.89, 5.94, 23.59, 1) -34.38%, rgba(22.25, 36.5, 85.6, 1) 54.595%, rgba(15, 23, 43, 1) 143.569%)",
      }}
    >
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="lg:w-1/2 relative">
          <Search
            size={18}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 outline-none"
            style={{
              background: "rgba(15, 23, 43, 0.5)",
              border: "1px solid rgba(43, 127, 255, 0.2)",
            }}
          />
        </div>

        <div className="lg:w-1/2 flex flex-wrap gap-2 sm:gap-3 justify-start lg:justify-end">
          <Dropdown
            options={typeOptions}
            value={selectedType}
            onChange={setSelectedType}
          />
          <Dropdown
            options={issueOptions}
            value={selectedIssue}
            onChange={setSelectedIssue}
          />
          <Dropdown
            options={dateOptions}
            value={selectedDate}
            onChange={setSelectedDate}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <CallList
          calls={callsData}
          selectedCall={selectedCall}
          onSelectCall={setSelectedCall}
        />
        <CallDetails call={selectedCall} />
      </div>
    </div>
  );
}

export default CallLogs;
