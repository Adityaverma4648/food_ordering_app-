import React, { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput,View ,Text, Pressable } from 'react-native';
import { ShoppingBagIcon,MagnifyingGlassIcon, BellAlertIcon , Bars3Icon} from "react-native-heroicons/solid";
import ToggleMenu from "../component/ToggleMenu";

const Header = () => {

     const navigation = useNavigation();
     const [visibility, setVisibility] = useState(false);
     const [close, setClose] = useState(false);

   const getLocation = () =>{
      
   }

     const toggleMenu = (e) =>{
         setVisibility(true);
     }

     const  handleCallBack = (childData) =>{  
        setVisibility(!childData);
     }
    
     const closeFun = () =>{
        setClose(true);
     } 

  return (
       <>
       {visibility && <ToggleMenu parentCallBack={handleCallBack} /> }
      <View className="w-full h-16 mt-9 sm:mt-0 fixed flex flex-row justify-evenly items-center top-0 z-40 bg-white shadow-xl" >
                <View className="w-full h-full py-2 flex flex-row justify-evenly items-center border-b border-gray-500/50 bg-slate-900" >
                {/*  Logo Container  */}
                   <Text className="h-2/12 flex justify-content-center align-items-center text-white" onPress={(e)=>{
                      toggleMenu(e)
                   }} >
                       <Bars3Icon color="#fff" />
                   </Text>
                {/* Logo  block ends here */}



                {/*  serach bar block */}
                 <View className="w-8/12 flex flex-row justify-start items-center rounded-xl border border-gray-500 px-2" >
                  <MagnifyingGlassIcon color = "#fff" />
                 <TextInput
                     className="w-10/12 px-2 py-1 text-white border-0 bg-transparent"
                     name="search"
                     id='search'
                     placeholderTextColor="#fff"
                     placeholder="Search Dishes...."
                     onKeyUp={(e)=>searchInitiated(e)}
                  >
                 </TextInput>
                 </View>
               {/*  serach blockends here */}
 
                  {/*  Settings */}
                  <Pressable className="w-1/12" onPress={()=>{
                    navigation.navigate('Notification')
                 }} >
                    <BellAlertIcon color="#fff" />
                 </Pressable>
                  {/*  Seting Block Ends here */}

                   {/*  CartButton block */}
                 <Pressable className="w-1/12" onPress={()=>{
                    navigation.navigate('Order')
                 }} >
                    <ShoppingBagIcon color="#fff" />
                 </Pressable>
                 {/*  CartBtn block ends here */}


                </View>
      </View>
      </>
  )
}

export default Header;