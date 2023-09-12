import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { ProductCondition } from "../ProductCondition";
import { ProductDescription } from "../ProductDescription";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";
import { withRow } from "../../hoc";
import { useProducts } from "../../hooks";

export default function HomePage() {
  const { isLoading, error, data: products } = useProducts();

  // TODO Utilisons un composant MUI
  if (isLoading) return "Loading…";

  // TODO Est-ce qu'on pourrait pas utiliser un message d'erreur
  // pour l'utilisateur à la hauteur de l'app entière ?
  if (error) return "oulala";

  const productColumns = [
    {
      field: "imageUrl",
      headerName: "Image produit",
      renderCell: withRow(ProductImage),
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      renderCell: withRow(ProductDescription),
    },
    {
      field: "price",
      headerName: "Prix",
      renderCell: withRow(ProductPrice),
    },
    {
      field: "condition",
      headerName: "État",
      renderCell: withRow(ProductCondition),
    },
    { field: "stock", headerName: "Stock" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={products}
        columns={productColumns}
        disableRowSelectionOnClick
        autoHeight
      />
    </Box>
  );
}
