import React from 'react'
import { TextInput,View ,Text,Button } from 'react-native'
import {ShoppingCartIcon} from "react-native-heroicons/solid";
import OrderScreen from "../screen/OrderScreen"; 

const Header = ({navigation}) => {
  return (
      <View className="w-full flex justify-center items-center bg-slate-900 py-4 px-2 top-0 z-50" style={{height:125}} >
            <View className="w-11/12 h-1/2  mt-2 flex flex-row justify-between items-center" >
                  <Text className="text-white text-xl font-semibold" >
                        LOGO
                  </Text>
                 <Button 
                      title="CART" 
                      color="pink"
                      className="text-black"
                      onPress={() =>
                            navigation.navigate('OrderScreen', {name: 'GulabJamun'})
                       }
                  />
            </View>
            <View className="w-11/12 h-1/2 flex justify-center items-center mt-2" >
                 <TextInput
                     className="w-full rounded-xl px-2 py-1 placeholder-gray-300 text-gray-300 bg-slate-600"
                     placeholder="Search Dishes....">
                 </TextInput>
            </View>
      </View>
  )
}

export default Header;