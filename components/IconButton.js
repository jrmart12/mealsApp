import React from "react";
import { Pressable, StyleSheet, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ icon, onPress, color }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.buttonPressed}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.7,
  },
});
export default IconButton;
