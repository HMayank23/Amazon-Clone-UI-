import React, {useState} from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./screens/HomeScreen";
import DrawerData from "./screens/DrawerContent";
import * as Font from "expo-font";
import {AppLoading} from "expo";

const Drawer = createDrawerNavigator();
const getFonts = () => {
  return Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
    "roboto-semiBold": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontsLoaded] = useState(false);
  if (fontLoaded) {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <DrawerData {...props} />}>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
