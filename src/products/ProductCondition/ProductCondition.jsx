import { oneOf } from "prop-types";

/**
 * ProductCondition
 *
 * Shlud not be only a translation string. My bad.
 *
 * @param {object} props
 * @param {"new"|"used"} props.condition
 * @returns {React.ReactElement}
 */
export default function ProductCondition({ condition }) {
  // TODO Ce serait mieux avec un tag/label, Chip MUI
  return condition === "new" ? "Neuf" : "Occasion";
}

ProductCondition.propTypes = {
  condition: oneOf(["new", "used"]),
};
