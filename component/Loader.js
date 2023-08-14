import React from 'react'
import { View , Text ,ActivityIndicator } from 'react-native'

const Loader = ({message}) => {
  return (
    <View className="w-full h-full flex justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="text-black" >
          {message}
        </Text>
    </View>
  )
}

export default Loader;