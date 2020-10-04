import React from "react";
import {globalStyles} from "../assets/styles/globalStyles";
import {StyleSheet, View, Text} from "react-native";
import {Feather, Entypo, MaterialIcons} from "@expo/vector-icons";

export default function BottomSheet() {
  return (
    <View style={{paddingHorizontal: 15}}>
      <Text style={[{fontSize: 16}, globalStyles.RobotoMedium]}>
        Choose your location
      </Text>
      <Text
        style={[{fontSize: 14, color: "#85929E"}, globalStyles.RobotoRegular]}
      >
        Select a delivery location to see product availability & delivery
        options
      </Text>

      <View style={styles.optionContainer}>
        <MaterialIcons name="location-on" size={20} color="#1565C0" />
        <Text style={[styles.bottomSheetOptions, globalStyles.RobotoRegular]}>
          Enter a pincode
        </Text>
      </View>
      <View style={styles.optionContainer}>
        <MaterialIcons name="my-location" size={20} color="#1565C0" />
        <Text style={[styles.bottomSheetOptions, globalStyles.RobotoRegular]}>
          Use my current location
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheetOptions: {
    fontSize: 14,
    color: "#1565C0",
    marginLeft: 10,
  },
  optionContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
