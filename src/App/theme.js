import { createTheme } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
    },
    button: {
      textTransform: "none",
    },
  },
});
