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
  const [activeButton, setActiveButton] = useState(1);

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
      title: "Welcome ",
      body: "",
      showQuickAuthOptions: false,
      getStartedOptions : true,
    },
    {
      id: 2,
      image: "../assets/render1.png",
      title: "The Experience Of Buying Food Quickly",
      body: "",
      showQuickAuthOptions: true,
      getStartedOptions : false,
    },
    {
      id: 3,
      image: "../assets/render1.png",
      title: "The Experience Of Buying Food Quickly",
      body: "",
      showQuickAuthOptions: false,
      getStartedOptions : false,
    },
    {
      id: 4,
      image: "../assets/render1.png",
      title: "The Experience Of Buying Food Quickly",
      body: "",
      showQuickAuthOptions: false,
      getStartedOptions : false,
    },
  ];
  
  // useEffect(()=>{
  //    if(0 <= scrollOffset && scrollOffset <= 426 ){
  //        setActiveButton(1);
  //    }else if(426 <= scrollOffset && scrollOffset <= (2*426) ){
  //        setActiveButton(2);
  //    }else if((2*426) <= scrollOffset && scrollOffset <= (3*426) ){
  //         setActiveButton(3);
  //     }else if((3*426) <= scrollOffset && scrollOffset <= (4*426) ){
  //       setActiveButton(4);
  //   }
  //   console.log(activeButton);
  // },[scrollOffset])

  return (
    <SafeAreaView className="w-full h-full flex justify-center items-center relative">
      <Pressable
        className="w-full z-10 cursor-pointer m-8 flex flex-row justify-end
          items-center absolute top-0 end-0 px-4"
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
              showQuickAuthOptions={d.showQuickAuthOptions}
              getStartedOptions={d.getStartedOptions}
            />
          );
        })}
      </ScrollView>

      <View className="absolute z-30 flex flex-row bottom-0 mb-32">
        {welcome.map((d) => {
          return (
            <Pressable
              key={d.id}
              onPress={() => {
                setTimeout(() => {
                  setScrollOffset((d.id - 1) * 430);
                }, 3000);
              }}
              className={`w-2 h-2 rounded-full bg-yellow-600 mx-1.5`}
            ></Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
