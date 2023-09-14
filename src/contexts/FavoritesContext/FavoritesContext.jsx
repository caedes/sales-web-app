import { arrayOf, node, string } from "prop-types";
import React from "react";
import { useSet } from "react-use";

const initialFavorites = [];

const FavoritesContext = React.createContext(initialFavorites);

const useContext = () => React.useContext(FavoritesContext);

const Provider = ({ children, favorites = initialFavorites }) => {
  const [favoriteIds, { toggle }] = useSet(new Set(favorites));

  const toggleFavorite = (id) => () => toggle(id);

  return (
    <FavoritesContext.Provider
      value={{ favorites: Array.from(favoriteIds), toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

Provider.propTypes = {
  children: node,
  favorites: arrayOf(string),
};

/**
 * FavoritesContext
 *
 * @example
 *
 * // App.jsx
 * import { FavoritesContext } from "../contexts";
 *
 * <FavoritesContext.Provider favorites={["id1", "id2"]}>
 *   <MyComponent />
 * </FavoritesContext.Provider>
 *
 * // MyComponent.jsx
 * import { FavoritesContext } from "../contexts";
 *
 * export default function MyComponent({ id }) {
 *   const { favorites, toggleFavorite } = FavoritesContext.useContext();
 *   const isFavorite = favorites.includes(id);
 *
 *   return (
 *     <Button onClick={toggleFavorite(id)}>
 *       {isFavorite ? "Remove" : "Add"}
 *     </Button>
 *   );
 * }
 */
const CustomFavoritesContext = {
  Provider,
  useContext,
};

export default CustomFavoritesContext;
