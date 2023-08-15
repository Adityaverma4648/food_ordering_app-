import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import resturantsData from "../data/restaurants.json";

import { HeartIcon, LinkIcon } from "react-native-heroicons/solid";

const Resturants = ({ navigation }) => {
  const [toggleCardDetails, setToggleCardDetails] = useState(false);

  return (
    <View
      className="w-full h-full flex justify-center items-center"
      style={{ height: 425 }}
    >
      <View className="w-full h-14 flex flex-row justify-start items-center p-2 ">
        <Text className="font-semibold text-lg">Resturants</Text>
      </View>
      <ScrollView
        horizontal={true}
        // contentContainerStyle= {{display : "flex",justifyContent : "center" , alignItems : "center"}}
        className="w-auto h-full flex flex-1 p-2"
      >
        {resturantsData.map((d, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("UniqueResturant", { data: d });
              }}
              key={index}
              className="flex flex-col justify-center items-center relative mx-1 bg-white rounded-lg overflow-hidden shadow-md shadow-black"
              style={{
                width: 250,
                height: 325,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 1,
              }}
            >
              <View
                className="h-full w-full flex justify-center items-center relative"
                style={{ height: 250, width: 250 }}
              >
                <View className="w-full h-full bg-white/50 flex justify-center items-center absolute z-10 p-2 hidden">
                  <Text className="font-semibold text-lg">
                    Click to see the resturant menus and all Dishes
                  </Text>
                </View>
                <Image
                  onMouseOver={() => {}}
                  source={{ uri: d.menu[0].image }}
                  className="w-full h-full relative"
                ></Image>
              </View>
              <View
                className="flex flex-col p-2 justify-center items-center"
                style={{ height: 100, width: 250 }}
              >
                <View className="w-full flex flex-row justify-between items-center ">
                  <View className="flex flex-1 justify-start items-start">
                    <Text className="text-black font-semibold text-lg">
                      {d.name}
                    </Text>
                    <Text className="text-gray-700 font-normal text-md">
                      {d.cuisine}
                    </Text>
                  </View>

                  <View className="w-10 h-full flex justify-center items-center ">
                    <LinkIcon color="#000" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Resturants;
