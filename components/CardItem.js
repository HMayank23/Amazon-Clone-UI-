import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import {Right, Card, CardItem} from "native-base";
import {globalStyles} from "../assets/styles/globalStyles";
import StarRating from "react-native-star-rating";

export default function RecommendedCardItem({
  itemName,
  itemCreator,
  itemPrice,
  rating,
  imageUri,
}) {
  return (
    <CardItem>
      <View>
        <Image source={imageUri} style={styles.recommendedImage} />
      </View>
      <Right
        style={{
          flex: 1,
          alignItems: "flex-start",
          height: 100,
          paddingHorizontal: 15,
        }}
      >
        <Text style={globalStyles.RobotoMedium}>{itemName}</Text>
        <Text style={[{color: "grey"}, globalStyles.RobotoRegular]}>
          {itemCreator}
        </Text>
        <Text style={[{color: "#c4402f"}, globalStyles.RobotoRegular]}>
          {itemPrice}
        </Text>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={rating}
          starSize={12}
          fullStarColor="orange"
        />
      </Right>
    </CardItem>
  );
}

const styles = StyleSheet.create({
  recommendedImage: {
    width: 60,
    height: 90,
  },
});
