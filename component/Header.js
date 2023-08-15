import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput, View, Text, Pressable , Image } from "react-native";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  Squares2X2Icon,
} from "react-native-heroicons/solid";

import { LinearGradient } from "expo-linear-gradient";

import ToggleMenu from "../component/ToggleMenu";
import LocationComponent from "./LocationComponent";

const Header = () => {
  const navigation = useNavigation();
  const [visibility, setVisibility] = useState(false);
  const [close, setClose] = useState(false);

  const toggleMenu = (e) => {
    setVisibility(true);
  };

  const parentCallBack = (value) => {
    setVisibility(value);
  };

  return (
    <View className="w-full flex flex-col justify-center items-center">
      {visibility && <ToggleMenu parentCallBack={parentCallBack} />}
      <LinearGradient
        colors={["#f285be", "#96e7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-full h-20 fixed flex flex-row justify-evenly items-end top-0 z-40 overflow-hidden p-2 shadow-2xl shadow-slate-600"
      >
        <View className="w-11/12 h-1/2 flex flex-row justify-between items-center">
          <View>
            {/*  Logo Container  */}
            <Pressable
              className="flex justify-content-center align-items-center text-white"
              onPress={(e) => {
                setVisibility(!visibility);
              }}
            >
              <Squares2X2Icon size={30} color="#c7186f" />
            </Pressable>
            {/* Logo  block ends here */}
          </View>

          <View className="flex flex-row justify-center items-center">
            {/*  Settings */}
            <Pressable
              className="mx-2"
              onPress={() => {
                navigation.navigate("Notification");
              }}
            >
              <BellAlertIcon color="#1e4e94" />
            </Pressable>
            {/*  Seting Block Ends here */}

            {/*  CartButton block */}
            <Pressable
              className="mx-2"
              onPress={() => {
                navigation.navigate("Order");
              }}
            >
              <View className="w-8 h-8 rounded-full overflow-hidden bg-black">
                <Image source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTbEpVYz7kpxmgq9y6B2_JNqX2vKbGWw_UH0AmqPNTg&s"}} className="w-full h-full rounded-full" ></Image>
              </View>
            </Pressable>
            {/*  CartBtn block ends here */}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Header;
