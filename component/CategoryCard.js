import React from 'react';
import { Image , View, TouchableOpacity, Text } from 'react-native';


const CategoryCard = (props) => {

  return (
    <TouchableOpacity className="flex flex-column mx-1">
    <View>
    <Image className="w-20 h-20"
        source={{
         uri : props.imageUri
        }}
     />
    </View>
    <View className="text-sm flex justify-center items-center text-red-500" >
        <Text className="text-blue-400" >
           {props.cousineName}
        </Text>
    </View>
    </TouchableOpacity>
  )
}

export default CategoryCard;