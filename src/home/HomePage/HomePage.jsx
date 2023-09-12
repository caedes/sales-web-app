import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { ProductCondition } from "../ProductCondition";
import { ProductDescription } from "../ProductDescription";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";
import { withRow } from "../../hoc";

export default function HomePage() {
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

  const products = [
    {
      description:
        "Ce magnifique radio-phono comprend un excellent récepteur radioL'ensemble, dans une belle ébénisterie teintée palissandre, forme un très phonique 6 lampes et un tourne-disque de vitesses placé sous le couvercle. Beau meuble. Ce modèle, dont le montage particulièrement soigne assure un très bon rendement aussi bien en radio qu'en phono, est garanti mn an.",
      id: "8f9529db-6d6c-4ddd-a4f5-32a9a99b4552",
      name: "Rustique Plastique Souris",
      imageUrl: "https://picsum.photos/seed/GedeGtmQp/640/640",
      price: 59.9,
      condition: "used",
      stock: 12,
      salesChannelId: "ebf4927b-3e04-4dce-9278-43505134c931",
    },
    {
      description:
        "Bicyclette à 1 vitesse, pneus 1/2 ballon. Cadre de 52cm. Jantes chromées. Roue Hore.  Moyeux indéréglables. 2 freins sur jantes. Guidon trials. Garde-boue et couvre chaine en acier émaillé. Porte-bagages. Gardejupes. Pédales à blocs caoutchouc. Émail couleur. Selle route cuir. Sacoche avec outillage. Pompe de cadre. Timbre avertisseur.",
      id: "85f2060a-f112-4424-a7c7-7feb57769e7f",
      name: "Luxueux Doux Chaise",
      imageUrl: "https://picsum.photos/seed/WDUh7FblHa/640/640",
      price: 57.83,
      condition: "new",
      stock: 6,
      salesChannelId: "ebf4927b-3e04-4dce-9278-43505134c931",
    },
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
