import React from 'react'
import { TextInput,View ,Text,Button } from 'react-native'
import {ShoppingCartIcon} from "react-native-heroicons/solid";
import OrderScreen from "../screen/OrderScreen"; 

const Header = ({navigation}) => {
  return (
      <View className="w-full h-2/12 fixed flex justify-center items-center bg-slate-900 py-4 px-2 top-0 z-50" >
            <View className=" mt-2 flex flex-row justify-between items-center" >
                <TextInput className="h-2/12 flex justify-content-center align-items-center text-white" >
                     Logo
                </TextInput>
                 <TextInput
                     className="w-8/12 rounded-0 p-2 placeholder-gray-300 text-gray-300 bg-slate-600 border border-gray-300"
                     placeholder="Search Dishes....">
                 </TextInput>
                 <Button 
                      title="CART" 
                      color="pink"
                      className="text-black w-2/12"
                      onPress={() =>
                            navigation.navigate('OrderScreen', {name: 'GulabJamun'})
                       }
                  />
            </View>
      </View>
  )
}

export default Header;