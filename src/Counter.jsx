import { number } from "prop-types";
import useCounter from "./useCounter";

export default function Counter({ initialValue = 0, step = 1 }) {
  const [counter, { increment, decrement }] = useCounter(initialValue, step);

  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
    </>
  );
}

Counter.propTypes = {
  initialValue: number,
  step: number,
};
