import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Animated
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ChevronDoubleRightIcon } from "react-native-heroicons/solid";

//  importing welcome cards
import WelcomeCard from "../component/WelcomeCard";
import { Circle } from "react-native-svg";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [scrollOffset, setScrollOffset] = useState(0);

  //  default navbar switched off
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const welcome = [
    {
      id: 1,
      image: "../assets/render1.png",
      title: "The Experience Of Buying Food Quickly",
      body: "",
      allowAuth: true,
    },
    {
      id: 2,
      image: "../assets/render1.png",
      title: "The Experience Of Buying Food Quickly",
      body: "",
      allowAuth: true,
    },
    {
      id: 3,
      image: "../assets/render1.png",
      title: "The Experience Of Buying Food Quickly",
      body: "",
      allowAuth: true,
    },
    {
      id: 4,
      image: "../assets/render1.png",
      title: "The Experience Of Buying Food Quickly",
      body: "",
      allowAuth: true,
    },
  ];

  return (
    <SafeAreaView className="w-full h-full flex justify-center items-center relative">
      <Pressable
        className="w-1/4 z-10 cursor-pointer m-8 flex flex-row justify-center
          items-center absolute top-0 end-0"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text className="font-semibold">Visit Home</Text>
        <ChevronDoubleRightIcon
          color="#000"
          className="text-sm font-semibold"
          size="16"
        />
      </Pressable>

      <ScrollView
        horizontal
        contentOffset={{ x: scrollOffset }}
        className="w-full h-full flex flex-row bg-green-100 relative"
      >
        {welcome?.map((d, index) => {
          return (
            <WelcomeCard
              key={index}
              id={d.id}
              image={d.image}
              title={d.title}
              body={d.body}
              allowAuth={d.allowAuth}
            />
          );
        })}
      </ScrollView>

      <View className="absolute z-10 flex flex-row bottom-0 mb-32">
        {welcome.map((d) => {
          return (
            <Pressable
              key={d.id}
              onPress={() => {
                setTimeout(() => {
                  setScrollOffset((d.id - 1) * 426);
                }, 3000);
              }}
              className="w-2 h-2 rounded-full bg-yellow-600 mx-1.5"
            ></Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
