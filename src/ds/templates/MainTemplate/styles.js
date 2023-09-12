import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Footer = styled("footer")`
  background-color: teal;
  color: white;
  padding: 1rem;
  margin-top: 2rem;
`;

/**
 * Button styled component for the nav links
 *
 * shouldForwardProp is here to not pass the current props to the Mui Button
 *
 * @returns React.Component
 */
export const Button = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "current",
})(({ theme, current }) => ({
  margin: `${theme.spacing(2)} 0`,
  color: "white",
  borderBottom: current ? "2px solid white" : 0,
}));
