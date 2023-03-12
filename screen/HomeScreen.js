import { View, Text, TextInput, SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {FaMapMarkerAlt,FaStream} from "react-icons/fa";
import { firebase } from '@react-native-firebase/database';

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
    alert(text);
  }
   
  return (
    <SafeAreaView className="flex flex-col items-center min-w-screen min-h-screen bg-white">
      <View className="w-11/12 flex flex-row items-center justify-between px-2 mt-5 rounded bg-pink-200 py-4">
          <Text className="w-1/2 text-xl font-bold">Logo</Text>
          <View className="w-1/2 flex justify-between items-center">
              {/* <FaMapMarkerAlt /> */}
              {/* <UserIcon /> */}
          </View>
      </View>
      <View className="w-11/12 flex justify-center items-center bg-pink-200 px-2 mt-1 py-2">
          <TextInput 
              className="py-2 w-full rounded-md px-2 border-2 border-pink-600"
              placeholder="Search Dishes.."
              onChange={(e)=>{
                  handleSearchBar(e)
              }}
              defaultValue= {text}
          />
      </View>
      <View className="w-11/12 flex justify-center items-center" >
           
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
