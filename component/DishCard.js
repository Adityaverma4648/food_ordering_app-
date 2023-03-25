import React from 'react';
import {Text,View,Image} from "react-native";

const DishCard = (props) => {
  return (
    <View className="w-full h-full bg-red-900 mx-1 flex justify-center items-center" >
       <View className="w-full h-full absolute flex justify-center items-center">
           <Image
              source={{uri : props.image?props.image:props.orgImage }}
              className="w-11/12 h-1/2"
            />
       </View>
       <View className="flex flex-col justify-center items-center" >
             <Text>
                  {props.name}
             </Text>
       </View>
    </View>
  )
}

export default DishCard