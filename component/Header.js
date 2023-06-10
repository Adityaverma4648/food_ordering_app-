import React, { useState,useEffect } from 'react'
import { TextInput,View ,Text,Button , Pressable } from 'react-native';
import {XMarkIcon , ShoppingBagIcon,MagnifyingGlassIcon, BellAlertIcon , Bars3Icon , MapPinIcon} from "react-native-heroicons/solid";
import ToggleMenu from "../component/ToggleMenu";

const Header = ({navigation}) => {

   //   [cancel, setCancel] = useState(false);
     const [visibility, setVisibility] = useState(false);
     const [close, setClose] = useState(false);

   //   const searchInitiated = (e) =>{
   //       setCancel(true)
   //   }

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
      <View className="w-full h-2/12 py-2 fixed flex flex-row justify-evenly items-center mt-6 top-0 z-40" >
                <View className="w-full h-full py-2 flex flex-row justify-evenly items-center border-b border-gray-500/50" >
                {/*  Logo Container  */}
                   <Text className="h-2/12 flex justify-content-center align-items-center text-gray-900" onPress={(e)=>{
                      toggleMenu(e)
                   }} >
                       <Bars3Icon color="#000" />
                   </Text>
                {/* Logo  block ends here */}



                {/*  serach bar block */}
                 <View className="w-8/12 flex flex-row justify-start items-center rounded-xl border border-gray-500 px-2" >
                  <MagnifyingGlassIcon color = "#000" />
                 <TextInput
                     className="w-10/12 px-2 py-1 text-gray-900 border-0 bg-transparent"
                     placeholderTextColor="#000"
                     placeholder="Search Dishes...."
                     onKeyUp={(e)=>searchInitiated(e)}
                  >
                 </TextInput>
                 </View>
               {/*  serach blockends here */}
 
                  {/*  Settings */}
                  <Text className="w-1/12" onPress={()=>{
                    navigation.navigate('Notification')
                 }} >
                    <BellAlertIcon color="#000" />
                 </Text>
                  {/*  Seting Block Ends here */}

                   {/*  CartButton block */}
                 <Text className="w-1/12" onPress={()=>{
                    navigation.navigate('Order')
                 }} >
                    <ShoppingBagIcon color="#000" />
                 </Text>
                 {/*  CartBtn block ends here */}


                </View>
      </View>
       {!close && <View className="w-full py-1 px-4 flex flex-row justify-between items-center animate-VerticalMovement bg-sky-100" id='location'>
           <View className="w-1/2 flex flex-row justify-start items-center ">
           
                 <Pressable className="font-semibold px-2 py-1 border border-gray-500/50 flex flex-row" onPress={()=>{navigation.navigate('Welcome')}} > 
                      <MapPinIcon color="#000" /> 
                      <Text>
                        Location
                      </Text>
                 </Pressable>
          
           </View>
           <View className="w-1/2 flex flex-row items-center justify-end" >
               <Pressable onPress={closeFun} >
                 <XMarkIcon color="#000" />
               </Pressable>
           </View>
       </View>}
      </>
  )
}

export default Header;