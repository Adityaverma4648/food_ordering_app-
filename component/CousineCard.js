import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";

const CousineCard = ({ name, image, navigation, id, data }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("UniqueCousine", { data });
      }}
      className="flex flex-column mx-1 shadow-2xl shadow-black bg-white rounded-lg overflow-hidden"
      style={{
        height: 124,
        shadowColor: "black",
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
      <View className="text-sm text-center flex flex-1 justify-center items-center text-red-500">
        <Text className="text-blue-900 font-semibold">{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CousineCard;
