import React, {useState} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {Card, CardItem, Body, Left, Right} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";
import {FlatList} from "react-native-gesture-handler";
import {globalStyles} from "../assets/styles/globalStyles";

export default function Grocery() {
  const [grocery, setGrocery] = useState([
    {title: "Fruits & Vegetables", img: require("../assets/images/fruits.jpg")},
    {
      title: "Up to 20% off | Snack Store",
      img: require("../assets/images/snacks.jpg"),
    },
    {
      title: "Household Cleaning",
      img: require("../assets/images/HygieneCleaning.jpg"),
    },
    {
      title: "Laundry & Detergents",
      img: require("../assets/images/laundry.jpg"),
    },
  ]);

  return (
    <Card transparent>
      <CardItem header>
        <Text style={[{fontSize: 18}, globalStyles.RobotoMedium]}>
          Super value days | Grocery essentials | More Megastore
        </Text>
      </CardItem>

      <CardItem style={{paddingTop: 0}}>
        <Body>
          <FlatList
            numColumns={2}
            data={grocery}
            renderItem={({item}) => (
              <View
                style={{
                  width: "50%",
                  marginBottom: 8,
                }}
              >
                <Image source={item.img} style={styles.mobileImage} />
                <Text
                  style={[{marginHorizontal: 5}, globalStyles.RobotoRegular]}
                >
                  {item.title}
                </Text>
              </View>
            )}
          />
        </Body>
      </CardItem>

      <CardItem
        footer
        style={{
          borderTopWidth: 1,
          borderTopColor: "#eee",
        }}
      >
        <Left>
          <Text
            style={[
              {color: "#0097cd", fontSize: 16},
              globalStyles.RobotoRegular,
            ]}
          >
            See All
          </Text>
        </Left>
        <Right>
          <MaterialIcons name="chevron-right" size={28} color="#0097cd" />
        </Right>
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  mobileImage: {
    resizeMode: "contain",
    height: 130,
    width: null,
    marginBottom: 8,
    marginHorizontal: 5,
  },
});
