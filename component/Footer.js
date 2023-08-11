import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View ,Text, Pressable} from "react-native";
import {HomeIcon, UserIcon , HeartIcon , GlobeAltIcon} from "react-native-heroicons/outline";
import { LinearGradient } from 'expo-linear-gradient';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#f285be" ,"#96e7ff"]} className="absolute bottom-0 z-40 w-11/12 h-14  flex flex-row justify-center items-center   py-2 rounded-full" >
         <Pressable className="w-1/4 flex flex-col justify-center items-center" onPress={()=>{
                    navigation.navigate('Home')
                 }} >
             <HomeIcon color="#000" />
             <Text className="text-sm">
                  Home
             </Text>
         </Pressable>
         <Pressable className="w-1/4 flex flex-col justify-center items-center"  onPress={()=>{
            navigation.navigate('Explore')
         }}  >
             <GlobeAltIcon color="#000" />
             <Text className="text-sm">
                  Discover
             </Text>
         </Pressable>
         <Pressable className="w-1/4 flex flex-col justify-center items-center" onPress={()=>{
               navigation.navigate('Saved');
         }} >
             <HeartIcon color="#000" />
             <Text className="text-sm">
                  Saved
             </Text>
         </Pressable>
         <Pressable className="w-1/4 flex flex-col justify-center items-center" onPress={()=>{
              navigation.navigate('User');
         }} >
             <UserIcon color="#000" />
             <Text className="text-sm">
                  User
             </Text>
         </Pressable>
    </LinearGradient>
  )
}

export default Footer;