import React, { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput,View ,Text, Pressable } from 'react-native';
import { ShoppingBagIcon,MagnifyingGlassIcon, BellAlertIcon , Bars3Icon, AdjustmentsVerticalIcon, ChevronDownIcon} from "react-native-heroicons/solid";

import { LinearGradient } from 'expo-linear-gradient';

import ToggleMenu from "../component/ToggleMenu";

const Header = () => {

     const navigation = useNavigation();
     const [visibility, setVisibility] = useState(false);
     const [close, setClose] = useState(false);

     const toggleMenu = (e) =>{
         setVisibility(true);
     }

     const  parentCallBack = (value) =>{  
        setVisibility(value);
     }

  return (
       <>
       {visibility && <ToggleMenu parentCallBack={parentCallBack} /> }
      <LinearGradient 
      colors={["#f285be" ,"#96e7ff"]}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}
       className="w-full h-36 fixed flex flex-col justify-evenly items-center top-0 z-40 shadow-xl overflow-hidden p-2" >
                <View className="w-11/12 flex flex-row justify-between items-center" >
                 <View>
                   {/*  Logo Container  */}
                   <Pressable className="flex justify-content-center align-items-center text-white" onPress={(e)=>{
                       setVisibility(!visibility);
                   }} >
                       <Bars3Icon size={30} color="#000" />
                   </Pressable>
                {/* Logo  block ends here */}
               </View>
 
                 <View className="flex flex-row justify-center items-center">
                    <Pressable className="flex flex-row justify-center items-center" onPress={()=>{}}  >
                    <Text className="text-lg font-bolder" >
                       Current Location
                    </Text>
                    <ChevronDownIcon color="#000" size={14} className="font-bold" />
                    </Pressable>
                 </View>

                 <View className="flex flex-row" >
                     {/*  Settings */}
                  <Pressable className="mx-2" onPress={()=>{
                    navigation.navigate('Notification')
                 }} >
                    <BellAlertIcon color="#000" />
                 </Pressable>
                  {/*  Seting Block Ends here */}

                   {/*  CartButton block */}
                 <Pressable className="mx-2" onPress={()=>{
                    navigation.navigate('Order')
                 }} >
                    <ShoppingBagIcon color="#000" />
                 </Pressable>
                 {/*  CartBtn block ends here */}
                 </View>


                </View>

                <View className="w-11/12 flex justify-center items-center" >
                        {/*  serach bar block */}
                 <View className="w-full flex flex-row justify-start items-center rounded-xl border-2 border-gray-800/40 px-2" >
                  <MagnifyingGlassIcon color = "rgba(0,0,0,0.6)" />
                 <TextInput
                     className="w-10/12 h-full p-2 text-black border-0 bg-transparent"
                     name="search"
                     id='search'
                     placeholderTextColor="rgba(0,0,0,0.6)"
                     placeholder="Search Dishes...."
                     onKeyUp={(e)=>searchInitiated(e)}
                  >
                 </TextInput>
                  <Pressable onPress={()=>{}} >
                     <AdjustmentsVerticalIcon color="rgba(0,0,0,0.6)"  />
                  </Pressable>
                 </View>
                        {/*  serach blockends here */}
                </View>
      </LinearGradient>
      </>
  )
}

export default Header;