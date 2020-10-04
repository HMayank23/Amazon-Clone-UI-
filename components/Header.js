import React from "react";
import {View, Image, StyleSheet} from "react-native";
import {Header, Left, Right, Item, Input} from "native-base";
import {TouchableOpacity} from "react-native-gesture-handler";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import {globalStyles} from "../assets/styles/globalStyles";

export default function AppHeader({navigation}) {
  return (
    <View style={styles.appHeader}>
      <View
        style={{
          flexDirection: "row",
          height: 60,
          marginLeft: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="menu"
            size={30}
            color="white"
            style={{marginRight: 12}}
            onPress={() => navigation.openDrawer()}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <Image
            style={styles.amazonLogo}
            source={require("../assets/images/amazon3.jpg")}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          right: 10,
          top: 15,
        }}
      >
        <Ionicons
          name="ios-mic"
          size={25}
          color="white"
          style={{marginRight: 25}}
        />
        <Feather
          name="shopping-cart"
          size={25}
          color="white"
          style={{marginRight: 2}}
        />
      </View>

      {/* Search View */}
      <View style={styles.searchView}>
        <Item style={styles.searchInput}>
          <MaterialIcons name="search" size={24} color="#85929E" />
          <Input placeholder="Search" style={globalStyles.RobotoRegular} />
          <Feather name="camera" size={24} color="#85929E" />
        </Item>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: "#232F3E",
    height: 120,
    borderBottomColor: "#757575",
    flexDirection: "row",
  },
  amazonLogo: {
    height: "100%",
    width: 100,
    resizeMode: "contain",
  },
  searchView: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 55,
    top: 62,
    backgroundColor: "#232F3E",
    paddingHorizontal: 10,
  },
  searchInput: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 45,
  },
});
