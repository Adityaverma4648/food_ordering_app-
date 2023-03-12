import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SparklesIcon, UserIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-col md:mx-auto md-flex md-items-center w-screen">
      <View className="flex flex-row py-4 items- mx-4 mt-4 rounded bg-pink-200">
        <View className="">
          <Text>Logo</Text>
        </View>
        <View class="flex-1">
          <Text>Curent Location</Text>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default HomeScreen;
