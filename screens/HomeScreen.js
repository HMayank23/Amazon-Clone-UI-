import React, {useRef} from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import {Container, Card, CardItem} from "native-base";
import {Feather, Entypo} from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import RecommendedCardItem from "../components/CardItem";
import AppHeader from "../components/Header";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";
import Mobiles from "../components/Mobiles";
import Grocery from "../components/Grocery";
import {globalStyles} from "../assets/styles/globalStyles";
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from "../components/BottomSheet";

export default function Home({navigation}) {
  const refRBSheet = useRef();
  return (
    <Container>
      {/* Header */}
      <AppHeader navigation={navigation} />
      {/* Search View */}

      {/* Select location View */}
      <View style={styles.locationView}>
        <Entypo name="location-pin" size={24} color="white" />
        <Text
          style={{color: "#fff", fontSize: 16, marginLeft: 5}}
          onPress={() => refRBSheet.current.open()}
        >
          Select a location to see product availability
        </Text>
      </View>

      <RBSheet
        ref={refRBSheet}
        height={300}
        animationType="fade"
        closeOnPressMask={true}
        closeOnDragDown={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0, 0.6)",
            opacity: 1,
          },
          container: {},
          draggableIcon: {
            backgroundColor: "#fff",
          },
        }}
      >
        <BottomSheet />
      </RBSheet>

      {/* Content */}
      <ScrollView>
        <View style={styles.content}>
          <Swiper style={{height: 200, marginBottom: 5}} autoplay={true}>
            <View style={{flex: 1}}>
              <Image
                style={styles.bannerImages}
                source={require("../assets/images/rsz_1pc_9max.jpg")}
              />
            </View>
            <View style={{flex: 1}}>
              <Image
                style={styles.bannerImages}
                source={require("../assets/images/bannerImage7.jpg")}
              />
            </View>
            <View style={{flex: 1}}>
              <Image
                style={styles.bannerImages}
                source={require("../assets/images/rsz_swiper_2.jpg")}
              />
            </View>
            <View style={{flex: 1}}>
              <Image
                style={styles.bannerImages}
                source={require("../assets/images/rsz_swiper_3.jpg")}
              />
            </View>
          </Swiper>

          {/* Mobiles Launches */}
          <Mobiles />

          <View style={{height: 150, marginVertical: 3}}>
            <Image
              style={{resizeMode: "contain", height: "100%", width: "100%"}}
              source={require("../assets/images/Mi_laptop_Mob_Hero_GW_1242x450_4.jpg")}
            />
          </View>

          <Grocery />

          <Card transparent style={{marginLeft: 8, marginRight: 8}}>
            <CardItem
              header
              style={{borderBottomWidth: 1, borderBottomColor: "#ddd"}}
            >
              <Text style={[{fontSize: 16}, globalStyles.RobotoMedium]}>
                Your Recommendations
              </Text>
            </CardItem>
            <RecommendedCardItem
              itemName="Unchartered 4"
              itemCreator="Sony"
              itemPrice="₹ 500"
              rating={4.5}
              imageUri={require("../assets/images/recommended_2.jpg")}
            />
            <RecommendedCardItem
              itemName="Heal your Life"
              itemCreator="Someone"
              itemPrice="₹ 200"
              rating={3.5}
              imageUri={require("../assets/images/recommended_1.jpg")}
            />
            <RecommendedCardItem
              itemName="UFC"
              itemCreator="Someone"
              itemPrice="₹ 300"
              rating={3}
              imageUri={require("../assets/images/recommended_3.jpg")}
            />
          </Card>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  whiteIcon: {
    color: "#fff",
  },
  content: {
    backgroundColor: "#d5d5d6",
    // top: 60,
    flex: 1,
  },
  locationView: {
    backgroundColor: "#232F3E",
    // top: 80,
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: "row",
  },
  bannerImages: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
