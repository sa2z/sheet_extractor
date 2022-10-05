import { Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "./layouts/dashboard";

import DashboardApp from "./pages/DashboardApp";
import TestComponent from "./TestComponent";
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [{ path: "/", element: <TestComponent /> }]
    },
    {}
  ]);
}
