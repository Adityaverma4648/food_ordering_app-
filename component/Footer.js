import React from 'react'
import {Text,View} from "react-native";
import {HomeIcon} from "react-native-heroicons/solid";
import HomeScreen from '../screen/HomeScreen';

const Footer = ({navigation}) => {
  return (
    <View className="w-full flex flex-row justify-center items-center bg-gray-500 py-2" style={{height:51}} >
         <View className="w-1/4 flex justify-center items-center" >
             <HomeIcon color="white" />
         </View>
         <View className="w-1/4 flex justify-center items-center" >
             <HomeIcon color="white" />
         </View>
         <View className="bg-yellow-500 w-10 p-2 h-10  rounded-3xl flex justify-center items-center border-2 border-white" >
             <HomeIcon color="white" />
         </View>
         <View className="w-1/4 flex justify-center items-center" >
             <HomeIcon color="white" />
         </View>
         <View className="w-1/4 flex justify-center items-center" >
             <HomeIcon color="white" />
         </View>
    </View>
  )
}

export default Footer