import React from 'react'
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
    <SafeAreaView>
       <Text>
          OrderScreen
       </Text>
    </SafeAreaView>
  )
}

export default OrderScreen