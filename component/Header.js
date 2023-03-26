import React, { useState,useEffect } from 'react'
import { TextInput,View ,Text,Button } from 'react-native';
import {StopCircleIcon,ShoppingCartIcon,MagnifyingGlassIcon, HomeIcon} from "react-native-heroicons/solid";
import OrderScreen from '../screen/OrderScreen';

const Header = ({navigation}) => {

    //   const printer = () =>{
    //          alert("printer");
    //          }
    //   useEffect(()=>{
    //          printer();
    //   },[])

     [cancel, setCancel] = useState(false);

     const searchInitiated = (e) =>{
         setCancel(true)
     }

  return (
      <View className="w-full h-2/12 fixed flex flex-row justify-evenly items-center bg-slate-100 mt-6 top-0 z-50" >
                <View className="w-full h-full py-2 flex flex-row justify-evenly items-center bg-gray-200" >
                {/*  Logo Container  */}
                   <Text className="h-2/12 flex justify-content-center align-items-center text-gray-900" >
                       Logo
                   </Text>
                {/* Logo  block ends here */}



                {/*  serach bar block */}
                 <View className="w-9/12 flex flex-row justify-start items-center rounded-xl border border-gray-500 px-2" >
                  <MagnifyingGlassIcon color = "#000" />
                 <TextInput
                     className="w-10/12 px-2 py-1 text-gray-900 bg-transparent"
                     placeholderTextColor="#000"
                     placeholder="Search Dishes...."
                     onKeyUp={(e)=>searchInitiated(e)}
                  >
                 </TextInput>
                 {cancel?<StopCircleIcon  color="#000" />:<HomeIcon className="hidden" />}
                 </View>
               {/*  serach blockends here */}
 



                {/*  CartButton block */}
                 <Text className="w-1/12" >
                    <ShoppingCartIcon color="#000" />
                 </Text>
                 {/*  CartBtn block ends here */}
                </View>
      </View>
  )
}

export default Header;