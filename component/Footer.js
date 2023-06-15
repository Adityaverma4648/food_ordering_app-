import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View , Pressable} from "react-native";
import {HomeIcon, UserIcon , HeartIcon , GlobeAltIcon} from "react-native-heroicons/solid";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-0 z-40 w-full h-16 flex flex-row justify-center items-center bg-slate-900 py-2" >
         <Pressable className="w-1/4 flex justify-center items-center" onPress={()=>{
                    navigation.navigate('Home')
                 }} >
             <HomeIcon color="white" />
         </Pressable>
         <Pressable className="w-1/4 flex justify-center items-center" >
             <GlobeAltIcon color="white" />
         </Pressable>
         <Pressable className="w-1/4 flex justify-center items-center" onPress={()=>{
               navigation.navigate('Saved');
         }} >
             <HeartIcon color="white" />
         </Pressable>
         <Pressable className="w-1/4 flex justify-center items-center" onPress={()=>{
              navigation.navigate('User');
         }} >
             <UserIcon color="white" />
         </Pressable>
    </View>
  )
}

export default Footer;