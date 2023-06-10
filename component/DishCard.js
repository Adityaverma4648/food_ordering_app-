import React from 'react';
import {Text,View,Image} from "react-native";

const DishCard = (props) => {
  return (
    <View className="h-1/2 w-full mx-1 flex justify-center items-center" >
       <View className="flex justify-center items-center"  >
           <Text className="text-xl text-semibold text-yellow-500" >
               {props.name}
           </Text>
       </View>
       <View className="w-full h-full flex justify-center items-center">
           <Image
              source={{uri : (props.image)  }}
              className="h-full w-full"
            />
       </View>
    </View>
  )
}

export default DishCard