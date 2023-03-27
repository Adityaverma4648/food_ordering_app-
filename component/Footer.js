import React from 'react'
import {Text,View} from "react-native";
import {HomeIcon, UserIcon} from "react-native-heroicons/solid";
import HomeScreen from '../screen/HomeScreen';

const Footer = ({navigation}) => {
  return (
    <View className="w-full h-16 flex flex-row justify-center items-center bg-gray-500 py-2" >
         <View className="w-1/5 flex justify-center items-center" onPress={()=>{
              navigation.navigate("Home")
         }} >
             <HomeIcon color="white" />
         </View>
         <View className="w-1/5 flex justify-center items-center" >
             <HomeIcon color="white" />
         </View>
         <View className="w-1/5 flex justify-center items-center" >
             <HomeIcon color="white" />
         </View>
         <View className="w-1/5 flex justify-center items-center" >
             <HomeIcon color="white" />
         </View>
         <View className="w-1/5 flex justify-center items-center" >
             <UserIcon color="white" />
         </View>
    </View>
  )
}

export default Footer