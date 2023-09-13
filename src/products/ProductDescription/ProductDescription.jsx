import { Box, Typography } from "@mui/material";
import { string } from "prop-types";
import { Link } from "react-router-dom";

export default function ProductDescription({ id, name, description }) {
  return (
    <Box>
      <Link to={`/products/${id}`}>{name}</Link>
      <br />
      <Typography>{description}</Typography>
    </Box>
  );
}

ProductDescription.propTypes = {
  id: string,
  name: string,
  description: string,
};
