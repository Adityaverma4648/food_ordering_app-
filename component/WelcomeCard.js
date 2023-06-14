import React from 'react'
import { Text } from 'react-native'

const WelcomeCard = ({data}) => {

  return (
    <Text className="text-xl mx-2 w-screen h-screen flex justify-center items-center bg-red-900" >
       {data.id}
    </Text>
  )
}

export default WelcomeCard;