import { View, Text, TextInput, Image, ScrollView , SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {FaMapMarkerAlt,FaStream} from "react-icons/fa";
import { firebase } from '@react-native-firebase/database';
import dish from "../data/dish.json";

const HomeScreen = () => {

  const navigation = useNavigation();
  const [text, setText] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  const handleSearchBar = (e) =>{
    setText(e.target.value);
  }
   
  return (
    <SafeAreaView className="flex flex-col items-center min-w-screen h-screen bg-white">
      <View className="w-11/12 flex flex-row items-center justify-between px-2 mt-5 rounded bg-pink-200 py-2">
          <Text className="w-1/2 text-xl font-bold">Logo</Text>
          <View className="w-1/2 flex justify-between items-center">
              {/* <FaMapMarkerAlt /> */}
              {text}
          </View>
      </View>
     
      <View className="w-11/12 h-5/6 flex justify-start items-center my-4 bg-pink-200" >
      <View className="w-full flex justify-center items-center  px-1 mt-1 py-1 z-20 relative">
          <TextInput 
              className="py-2 w-full rounded-md px-2 border-2 bg-pink-200 border-pink-600 opacity-80 text-black"
              placeholder="Search Dishes...."
              onChange={(e)=>{
                  handleSearchBar(e)
              }}
              defaultValue= {text}
          />
          <View className="flex flex-row justify-center items-center" >
                   {dish?.map((d)=>{
                         return <View className="text-white w-3/4" >
                                  <Text className="text-red-900 bg-white/60 backdrop-blur-xl" >
                                     {d.name}
                                  </Text>
                                </View>
                     })}
          </View>
      </View>
           <View className="absolute w-full h-full flex justify-center items-center">
                <Image
                   source={{
                    uri:'https://images.unsplash.com/photo-1669490883041-2d0ac48bc4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80',
                    }}
                    className="absolute w-full h-full"
                />
           </View>
      </View>
      <View className="w-full px-2 bottom-0 absolute flex flex-row justify-center items-center mt-1 py-2 bg-pink-200" >
         <Text className="w-1/5 mr-1 p-2" >
            Home
         </Text>
         <Text className="w-1/5 mr-1 p-2" >
            Explore
         </Text>
         <Text className="w-1/5 mr-1 p-2" >
            Dish
         </Text>
         <Text className="w-1/5 mr-1 p-2" >
            Order
         </Text>
         <Text className="w-1/5 mr-1 p-2" >
            Pay
         </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
