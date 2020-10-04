import React, {useState} from "react";
import {View, Text, StyleSheet, Image, FlatList} from "react-native";
import {DrawerContentScrollView, DrawerContent} from "@react-navigation/drawer";
import {
  Container,
  Header,
  Left,
  Right,
  Content,
  ListItem,
  Icon,
} from "native-base";
import {TouchableOpacity} from "react-native-gesture-handler";
import {globalStyles} from "../assets/styles/globalStyles";

export default function DrawerData(props) {
  const [menuData, setMenuData] = useState([
    {text: "Home", id: 0, icon: "home"},
    {text: "Shop by Category", id: 1, icon: "book"},
    {text: "Today's Deals", id: 2, icon: "thumbs-up"},
  ]);
  return (
    <View style={{flex: 1}}>
      <Container>
        <Header
          style={{
            backgroundColor: "#232F3E",
            height: 62,
            paddingVertical: 10,
          }}
        >
          <Left style={{flexDirection: "row", flex: 1, alignItems: "center"}}>
            <View>
              <Image
                style={styles.userImage}
                source={require("../assets/images/user3.png")}
              />
            </View>
            <Text
              style={[
                {
                  color: "white",
                  fontSize: 20,
                  fontStyle: "italic",
                },
                globalStyles.RobotoRegular,
              ]}
            >
              Hello, Mayank
            </Text>
          </Left>
        </Header>
        <Content>
          <FlatList
            style={styles.BorderBottom}
            data={menuData}
            renderItem={({item}) => (
              <TouchableOpacity>
                <ListItem noBorder>
                  <Icon
                    type="Ionicons"
                    name={item.icon}
                    style={{
                      fontSize: 24,
                      color: "rgb(128, 139, 150 )",
                      marginRight: 10,
                    }}
                  />
                  <Text style={[{fontSize: 16}, globalStyles.RobotoRegular]}>
                    {item.text}
                  </Text>
                </ListItem>
              </TouchableOpacity>
            )}
          />
        </Content>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  userImage: {
    height: "100%",
    width: 60,
    resizeMode: "contain",
    borderRadius: 60,
    marginRight: 10,
  },
  BorderBottom: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
});
