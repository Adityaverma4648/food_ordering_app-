import React , {useState , useEffect} from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//  importing components
import HomeScreen from "./screen/HomeScreen";
import ExploreScreen from "./screen/ExploreScreen";
import OrderScreen from "./screen/OrderScreen";
import SettingScreen from "./screen/SettingScreen";
import NotificationScreen from "./screen/NotificationScreen";
import UserScreen from "./screen/UserScreen";
import SavedScreen from "./screen/SavedScreen";
import RegisterScreen from "./screen/RegisterScreen";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Explore" component={ExploreScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="User" component={UserScreen} />
          <Stack.Screen name="Saved" component={SavedScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
