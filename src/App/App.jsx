import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { router } from "./router";
import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
