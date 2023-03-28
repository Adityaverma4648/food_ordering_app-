import React, { useState,useEffect } from 'react'
import { TextInput,View ,Text,Button } from 'react-native';
import {StopCircleIcon,ShoppingCartIcon,MagnifyingGlassIcon, HomeIcon , BellAlertIcon , Bars3Icon} from "react-native-heroicons/solid";
import ToggleMenu from "../component/ToggleMenu";

const Header = ({navigation}) => {

    //   const printer = () =>{
    //          alert("printer");
    //          }
    //   useEffect(()=>{
    //          printer();
    //   },[])

   //   [cancel, setCancel] = useState(false);
     const [visibility, setVisibility] = useState(false);

   //   const searchInitiated = (e) =>{
   //       setCancel(true)
   //   }

     const toggleMenu = (e) =>{
         setVisibility(true);
     }

     const  handleCallBack = (childData) =>{  
        setVisibility(!childData);

     }

  return (
       <>
       {visibility ? <ToggleMenu navigation={navigation} parentCallBack={handleCallBack} visibility={visibility} /> : "" }
      <View className="w-full h-2/12 fixed flex flex-row justify-evenly items-center bg-slate-100 mt-6 top-0 z-40" >
                <View className="w-full h-full py-2 flex flex-row justify-evenly items-center bg-gray-200" >
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
                 {/* {cancel?<StopCircleIcon  color="#000" />:<HomeIcon className="hidden" />} */}
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
                    navigation.navigate('OrderScreen')
                 }} >
                    <ShoppingCartIcon color="#000" />
                 </Text>
                 {/*  CartBtn block ends here */}


                </View>
      </View>
      </>
  )
}

export default Header;