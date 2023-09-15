import { ButtonGroup, Button, Card, Typography } from "@mui/material";
import { number } from "prop-types";

import { CardContent } from "./styles";
import { useCounter } from "@/hooks";

export default function Counter({ initialValue = 0, step = 1 }) {
  const [counter, { increment, decrement }] = useCounter(initialValue, step);

  return (
    <Card
      sx={{ maxWidth: 200, margin: "1rem" }}
      elevation={5}
      aria-label="counter"
    >
      <CardContent>
        <Typography variant="h2" component="h6">
          {counter}
        </Typography>
        <ButtonGroup>
          <Button onClick={increment}>+{step}</Button>
          <Button onClick={decrement}>-{step}</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

Counter.propTypes = {
  initialValue: number,
  step: number,
};
