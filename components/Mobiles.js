import React, {useState} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {Card, CardItem, Body, Left, Right} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";
import {FlatList} from "react-native-gesture-handler";
import {globalStyles} from "../assets/styles/globalStyles";

export default function Mobiles() {
  const [mobiles, setMobiles] = useState([
    {title: "OnePlus 8", img: require("../assets/images/onePlus8.jpg")},
    {title: "Mi 10", img: require("../assets/images/mi10.jpg")},
    {
      title: "OPPO Find X2",
      img: require("../assets/images/oppoFind1.jpg"),
    },
    {title: "OnePlus Nord", img: require("../assets/images/nord.png")},
  ]);

  return (
    <Card transparent>
      <CardItem header>
        <Text style={[{fontSize: 18}, globalStyles.RobotoMedium]}>
          Mobiles & accessories | New launches
        </Text>
      </CardItem>

      <CardItem>
        <Body>
          <FlatList
            numColumns={2}
            data={mobiles}
            renderItem={({item}) => (
              <View
                style={{
                  width: "50%",
                  marginBottom: 8,
                }}
              >
                <Image source={item.img} style={styles.mobileImage} />
                <Text style={globalStyles.RobotoRegular}>{item.title}</Text>
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
    height: 160,
    width: null,
    marginBottom: 8,
  },
});
