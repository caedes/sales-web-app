import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "../ds/templates";
import { HomePage } from "../home/HomePage";
import { CountersPage } from "../counters/CountersPage";
import { ProductPage } from "../products/ProductPage";
import { ProjectsPage } from "../projects/ProjectsPage";
import { FavoritesPage } from "../products/FavoritesPage";

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
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "counters",
        element: <CountersPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);
