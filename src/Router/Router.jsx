import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardOverview from "../pages/DashboardOverview";
import CallLogs from "../pages/CallLogs";
import Appointments from "../pages/Appointments";
import SettingsPage from "../pages/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: "call-logs",
        element: <CallLogs />,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
