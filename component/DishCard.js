import React from 'react';
import {Text,View,Image} from "react-native";

const DishCard = (props) => {
  return (
    <View className="h-3/4 w-1/5 mx-1 flex justify-center items-center" >
       <View className="flex justify-center items-center"  >
           <Text className="text-xl text-semibold text-yellow-500" >
               {props.name}
           </Text>
       </View>
       <View className="w-full h-full flex justify-center items-center">
           <Image
              source={{uri : (props.image)  }}
              className="w-full h-3/4"
            />
       </View>
    </View>
  )
}

export default DishCard