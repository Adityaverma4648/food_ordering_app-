import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";

const CategoryCard = ({ navigation, image, name, data }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("UniqueCategory", { data });
      }}
      className="flex flex-column mx-1 shadow-2xl shadow-black rounded-lg overflow-hidden bg-white"
      style={{
        height : 124,
        shadowColor: "red",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 1,
      }}
    >
      <View>
        <Image
          className="w-20 h-20"
          source={{
            uri: image,
          }}
        />
      </View>
      <View className="text-sm flex flex-1 justify-center items-center text-red-500">
        <Text className="text-blue-900 font-semibold">{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
