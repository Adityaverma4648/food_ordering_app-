import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import {
  HomeIcon,
  UserIcon,
  HeartIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";
import { LinearGradient } from "expo-linear-gradient";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#f285be", "#96e7ff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="absolute bottom-0 z-40 w-11/12 h-16 flex flex-row justify-evenly items-center py-2 rounded-full mb-2 ml-4  backdrop-blur-xl "
    >
      <Pressable
        className="flex flex-col justify-center items-center"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <HomeIcon color="#000" size={20} />
        <Text style={{ fontSize: 12 }} className="font-bold">
          Home
        </Text>
      </Pressable>
      <Pressable
        className="flex flex-col justify-center items-center"
        onPress={() => {
          navigation.navigate("Explore");
        }}
      >
        <GlobeAltIcon color="#000" size={20} />
        <Text style={{ fontSize: 12 }} className="font-bold">
          Discover
        </Text>
      </Pressable>

      <Pressable
        className="flex flex-col justify-center items-center"
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        <MagnifyingGlassIcon color="#000" size={20} />
        <Text style={{ fontSize: 12 }} className="font-bold">
          Search
        </Text>
      </Pressable>

      <Pressable
        className="flex flex-col justify-center items-center"
        onPress={() => {
          navigation.navigate("Saved");
        }}
      >
        <HeartIcon color="#000" size={20} />
        <Text style={{ fontSize: 12 }} className="font-bold">
          Saved
        </Text>
      </Pressable>
      <Pressable
        className="flex flex-col justify-center items-center"
        onPress={() => {
          navigation.navigate("User");
        }}
      >
        <ShoppingBagIcon color="#000" size={20} />
        <Text style={{ fontSize: 12 }} className="font-bold">
          Orders
        </Text>
      </Pressable>
    </LinearGradient>
  );
};

export default Footer;
