import { Grid, Skeleton, Typography } from "@mui/material";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";
import { ProductCondition } from "../ProductCondition";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks";

// TODO Réutilisation du layout de la page, les Grids
export default function ProductPage() {
  const { id } = useParams();
  const { isLoading, error, data: product } = useProduct(id);

  // TODO ReactErrorBoundary
  if (error) return console.error(error);

  return (
    <>
      <Typography variant="h1">
        {isLoading ? <Skeleton /> : product.name}
      </Typography>
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid item md={4}>
          {isLoading ? (
            <Skeleton variant="rectangular" width={350} height={350} />
          ) : (
            <ProductImage
              imageUrl={product.imageUrl}
              name={product.name}
              width={350}
              height={350}
            />
          )}
        </Grid>
        <Grid container item direction="column" md={8}>
          <Grid container item spacing={2} sx={{ pb: 2 }}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={200} />
            ) : (
              <>
                <Grid item>
                  <ProductCondition condition={product.condition} />
                </Grid>
                <Grid item>
                  <ProductPrice price={product.price} />
                </Grid>
              </>
            )}
          </Grid>
          <Grid item>
            <Typography>
              {isLoading ? <Skeleton /> : product.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
