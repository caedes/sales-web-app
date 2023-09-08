import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainTemplate from "./MainTemplate";
import HomePage from "./home/HomePage";
import CountersPage from "./counters/CountersPage";

const router = createBrowserRouter([
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

export default function App() {
  return <RouterProvider router={router} />;
}
