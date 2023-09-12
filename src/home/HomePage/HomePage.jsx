import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

import { ProductCondition } from "../ProductCondition";
import { ProductDescription } from "../ProductDescription";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";
import { withRow } from "../../hoc";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
