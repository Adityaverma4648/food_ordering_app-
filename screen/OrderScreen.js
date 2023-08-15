import React , {useLayoutEffect} from 'react'
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {Text} from "react-native";

const OrderScreen = ({navigation,route}) => {

  // const navigation = useNavigation();

  //  default navbar switched off
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="w-full h-full flex items-center justify-center bg-red-100 font-semibold">
       <Text className="text-lg" >
          OrderScreen
       </Text>
    </SafeAreaView>
  )
}

export default OrderScreen