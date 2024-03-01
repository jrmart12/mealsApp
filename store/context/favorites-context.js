import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((f) => f !== id)
    );
    console.log(favoriteMealIds)
  }
  const value ={
    ids: favoriteMealIds,
    addFavorite:  addFavorite,
    removeFavorite: removeFavorite
  }
  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
}

export default FavoriteContextProvider;
