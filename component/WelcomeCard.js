import React from 'react'
import { View , Text , Image ,ScrollView , Pressable} from 'react-native'
 
const WelcomeCard = ({id , image ,title ,body ,allowAuth}) => {

  return (
    <View className="text-xl flex justify-center items-center relative overflow-hidden" style={{width : 426 ,height : 850  }} >
         
            <Text className="absolute z-10 text-3xl bg-white">
               Hello {id}
            </Text> 
            <Image source={require('../assets/render1.png')} className="w-full h-full relative"></Image>
       
    </View>
  )
}

export default WelcomeCard;