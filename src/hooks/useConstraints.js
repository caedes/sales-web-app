import { useReducer } from "react";

const initialConstraintsState = (constraints) =>
  Object.fromEntries(constraints.map(({ name }) => [name, false]));

/**
 * @typedef {object} Constraints
 * @property {string} name
 * @property {string} label
 */

/**
 * @typedef {object} ConstraintsState
 * @property {boolean} cost
 * @property {boolean} scope
 * @property {boolean} time
 */

/**
 * @typedef {object} ConstraintsAction
 * @property {string} type
 */

/**
 * @typedef {object} UseConstraintsReturn
 * @property {ConstraintsState} constraintsState
 * @property {function} toggle
 */

/**
 *
 * @param {ConstraintsState} state
 * @param {ConstraintsAction} action
 * @returns ConstraintsState
 */
const constraintsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COST":
      return {
        ...state,
        cost: !state.cost,
        scope: state.cost ? false : state.scope,
        time: !state.cost ? true : state.time,
      };

    case "TOGGLE_SCOPE":
      return {
        ...state,
        scope: !state.scope,
        cost: !state.scope ? true : state.cost,
        time: state.scope ? false : state.time,
      };

    case "TOGGLE_TIME":
      return {
        ...state,
        time: !state.time,
        scope: !state.time,
      };

    default:
      return state;
  }
};

/**
 *
 * @param {Constraints} constraints
 * @returns {UseConstraintsReturn}
 */
export default function useConstraints(constraints) {
  const CONSTRAINT_TYPES = Object.fromEntries(
    constraints.map(({ name }) => [name, `TOGGLE_${name.toUpperCase()}`]),
  );

  const [constraintsState, dispatch] = useReducer(
    constraintsReducer,
    initialConstraintsState(constraints),
  );

  const toggle = (name) => () =>
    dispatch({
      type: CONSTRAINT_TYPES[name],
    });

  return { constraintsState, toggle };
}
