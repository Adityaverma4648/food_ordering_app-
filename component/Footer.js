import React from 'react'
import {Text,View} from "react-native";
import {HomeIcon} from "react-native-heroicons/solid";
import HomeScreen from '../screen/HomeScreen';

const Footer = ({navigation}) => {
  return (
    <View className="w-full bottom-0 absolute flex flex-row justify-center items-center bg-slate-900 py-2" style={{height:51}} >
         <View className="w-1/4 flex justify-center items-center" >
             <HomeIcon color="white" />
         </View>
         <View className="w-1/4 flex justify-center items-center" >
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