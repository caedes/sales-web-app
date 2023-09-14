import { LinearProgress, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "../productColums";
import { useProductsByIds } from "../../hooks";
import { FavoritesContext } from "../../contexts";

export default function FavoritesPage() {
  const { favorites } = FavoritesContext.useContext();
  const {
    isLoading,
    error,
    data: favoriteProducts,
  } = useProductsByIds({ ids: favorites });

  // TODO ErrorBoundary
  if (error) throw "oulala";

  return (
    <>
      <Typography variant="h1">Favorites</Typography>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DataGrid
          rows={favoriteProducts}
          columns={productColumns}
          disableRowSelectionOnClick
          autoHeight
        />
      )}
    </>
  );
}
