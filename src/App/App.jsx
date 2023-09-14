import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";

import { router } from "./router";
import { theme } from "./theme";
import { queryClient } from "./queryClient";
import { FavoritesContext } from "../contexts";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesContext.Provider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </FavoritesContext.Provider>
    </QueryClientProvider>
  );
}
