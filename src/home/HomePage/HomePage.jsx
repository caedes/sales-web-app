import {
  FormControl,
  FormControlLabel,
  FormLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { ProductCondition } from "../ProductCondition";
import { ProductDescription } from "../ProductDescription";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";
import { withRow } from "../../hoc";
import { useProductSearch, useProducts } from "../../hooks";

const conditionTypes = [
  {
    label: "Toutes",
    value: "",
  },
  {
    label: "Neuf",
    value: "new",
  },
  {
    label: "Occasion",
    value: "used",
  },
];

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

export default function HomePage() {
  const { condition, search, setCondition, setSearch } = useProductSearch();
  const {
    isLoading,
    error,
    data: products,
  } = useProducts({ condition, search });

  // TODO Est-ce qu'on pourrait pas utiliser un message d'erreur
  // pour l'utilisateur à la hauteur de l'app entière ?
  // https://github.com/bvaughn/react-error-boundary#readme
  // https://mui.com/material-ui/react-snackbar/#customization
  if (error) throw "oulala";

  return (
    <>
      <Stack direction="row" justifyContent="center" spacing={6} sx={{ my: 4 }}>
        <TextField
          label="Recherche"
          sx={{ width: 400 }}
          autoComplete="off"
          value={search}
          onChange={setSearch}
        />
        <FormControl>
          <FormLabel id="condition-label">Condition</FormLabel>
          <RadioGroup
            row
            aria-labelledby="condition-label"
            name="condition"
            value={condition}
            onChange={setCondition}
          >
            {conditionTypes.map(({ label, value }) => (
              <FormControlLabel
                key={label}
                value={value}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Stack>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DataGrid
          rows={products}
          columns={productColumns}
          disableRowSelectionOnClick
          autoHeight
        />
      )}
    </>
  );
}
