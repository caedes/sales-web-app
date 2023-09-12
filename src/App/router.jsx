import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "../ds/templates";
import { HomePage } from "../home/HomePage";
import { CountersPage } from "../counters/CountersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "counters",
        element: <CountersPage />,
      },
    ],
  },
]);
