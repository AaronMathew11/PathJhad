import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "../screens/OnboardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./BottomNav";
import SinglePost from "../screens/SinglePost";
import ScanInfo from "../screens/ScanInfo";
// import DrawerNav from "./DrawerNav";

const Stack = createNativeStackNavigator();

export default function MainNav() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isFirstLaunch && (
          <Stack.Screen
            options={{ headerShown: false }}
            name='OnboardingScreen'
            component={OnboardingScreen}
          />
        )}
        <Stack.Screen
          name='Home'
          component={BottomNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ScanInfo'
          component={ScanInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SinglePost'
          component={SinglePost}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name='Drawer'
          component={DrawerNav}
          opttions={{headerShown:false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
