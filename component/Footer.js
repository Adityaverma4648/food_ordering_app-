import React from 'react'
import {Text,View} from "react-native";
import {HomeIcon, UserIcon , HeartIcon} from "react-native-heroicons/solid";
import HomeScreen from '../screen/HomeScreen';

const Footer = ({navigation}) => {
  return (
    <View className="w-full h-16 flex flex-row justify-center items-center bg-slate-900 py-2" >
         <View className="w-1/4 flex justify-center items-center" onPress={()=>{
              navigation.navigate("Home")
         }} >
             <HomeIcon color="white" />
         </View>
         <View className="w-1/4 flex justify-center items-center" >
             <HomeIcon color="white" />
         </View>
         <View className="w-1/4 flex justify-center items-center" >
             <HeartIcon color="white" />
         </View>
         <View className="w-1/4 flex justify-center items-center" >
             <UserIcon color="white" />
         </View>
    </View>
  )
}

export default Footer