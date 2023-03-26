import React from 'react';
import {Text,View,Image} from "react-native";

const DishCard = (props) => {
  return (
    <View className="h-full w-full bg-red-400 mx-1 flex flex-col justify-center items-center overflow-x-scroll" >
       <View className="flex" >
           <Text className="text-xl text-semibold text-yellow-500" >
               {props.name}
           </Text>
       </View>
       <View className="w-full h-full absolute flex justify-center items-center">
           <Image
              source={{uri : (props.image)  }}
              className="w-full h-3/4"
            />
       </View>
    </View>
  )
}

export default DishCard