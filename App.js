import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//  importing components
import HomeScreen from "./screen/HomeScreen";
import Explore from "./screen/Explore";
import OrderScreen from "./screen/OrderScreen";
import SettingScreen from "./screen/SettingScreen";
import NotificationScreen from "./screen/NotificationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Explore" component={Explore} />
          <Stack.Screen name="OrderScreen" component={OrderScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
