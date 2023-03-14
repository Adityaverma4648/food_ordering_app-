import React from 'react'
import {Text} from "react-native";

const OrderScreen = ({navigation,route}) => {
  return (
    <Text>OrderScreen {route.params.route} </Text>
  )
}

export default OrderScreen