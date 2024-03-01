import { React, useState, useLayoutEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import {FavoriteContext} from "../store/context/favorites-context";

const MealOverviewScreen = ({ route, navigation }) => {
  const favoriteMealCtx=useContext(FavoriteContext);
  const [itemData, setItemData] = useState();
  const itemId = route.params.itemId;
  let mealIsFavorite= favoriteMealCtx.ids.includes(itemId);
  console.log(mealIsFavorite)
  function changeFavoriteHandler(){
    if(mealIsFavorite){
      favoriteMealCtx.removeFavorite(itemId);
    }else{
      favoriteMealCtx.addFavorite(itemId);
    }
    mealIsFavorite= favoriteMealCtx.ids.includes(itemId);
  }
  useLayoutEffect(() => {
    const mealItem = MEALS.find((meal) => meal.id === itemId);
    setItemData(mealItem);
    navigation.setOptions({
      title: mealItem.title,
      headerRight: () => {
        return (
          <IconButton icon={mealIsFavorite?"star": "star-outline"} onPress={changeFavoriteHandler} color="white" />
        );
      },
    });
  }, [itemId, navigation,changeFavoriteHandler]);
  
  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <Image source={{ uri: itemData?.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{itemData?.title}</Text>
        <MealDetails
          duration={itemData?.duration}
          complexity={itemData?.complexity}
          affordability={itemData?.affordability}
          styleItem={styles.text}
        />
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            {itemData?.ingredients?.map((item) => (
              <View key={item} style={styles.contentItem}>
                <Text style={styles.text}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Steps</Text>
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            {itemData?.steps?.map((item) => (
              <View key={item} style={styles.contentItem}>
                <Text style={styles.text}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
  image: {
    width: "100%",
    height: 350,
  },
  text: {
    color: "grey",
    textAlign: "center",
    fontSize: 12,
    margin: 8,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    fontWeight: "bold",
  },
  subTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 54,
    marginVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  contentItem: {
    borderRadius: 3,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  rootContainer: {
    marginBottom: 34,
  },
});

export default MealOverviewScreen;
