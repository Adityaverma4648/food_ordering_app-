import React from 'react'
import { View , Text , StyleSheet } from 'react-native'

const WelcomeCard = ({data}) => {

  return (
    <View className="text-xl w-full h-full flex justify-center items-center bg-blue-500" style={styles.container} >
         <Text className >
           {data.id}
         </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
})


export default WelcomeCard;