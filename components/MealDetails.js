import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({ duration, complexity, affordability, styleItem }) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, styleItem]}>{duration} minutes</Text>
      <Text style={[styles.detailItem, styleItem]}>
        {complexity?.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, styleItem]}>
        {affordability?.toUpperCase()}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
export default MealDetails;
