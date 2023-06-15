import React from 'react'
import { View , Text , StyleSheet } from 'react-native'
import { ScrollView } from 'react-native';

const WelcomeCard = ({data}) => {

  return (
    <View className="text-xl w-screen h-screen flex bg-blue-500 justify-center items-center" >
         <Text className="text-center" >
            {data.id}
         </Text>
    </View>
  )
}

export default WelcomeCard;