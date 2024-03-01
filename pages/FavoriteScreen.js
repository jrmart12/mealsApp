import { React, useContext, useEffect } from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import {FavoriteContext} from "../store/context/favorites-context";
import { Text, StyleSheet, View } from "react-native";
const FavoriteScreen = () => {
  const favoriteMealCtx=useContext(FavoriteContext);
  let displayedMeals = favoriteMealCtx.ids

  const favoriteMeals = MEALS.filter((meal) =>
   favoriteMealCtx.ids.includes(meal.id)
  );
  useEffect(() => {
    displayedMeals = favoriteMealCtx.ids
  }, [])
  
  if(favoriteMeals.length===0){
return(
  <View style={styles.container}>
    <Text style={styles.text}>You have no favorite meals yet</Text>
  </View>
)
  }

  return (
<MealsList displayedMeals={favoriteMeals}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
});

export default FavoriteScreen;
