import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";
const MealItem = ({ item }) => {
  const navigation = useNavigation();
  function onPress() {
    navigation.navigate("MealOverview", { itemId: item.id });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
        <MealDetails
          duration={item?.duration}
          complexity={item?.complexity}
          affordability={item?.affordability}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default MealItem;
