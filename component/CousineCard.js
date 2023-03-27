import React from 'react';
import { Image , View, TouchableOpacity, Text } from 'react-native';


const CousineCard = (props) => {

  return (
    <TouchableOpacity className="flex flex-column mx-1">
           <View>
           <Image className="w-20 h-20"
               source={{
                uri : props.imageUri
               }}
            />
           </View>
           <View className="text-sm text-red-500" >
               <Text className="text-blue-400" >
                  {props.cousineName}
               </Text>
           </View>
    </TouchableOpacity>
  )
}

export default CousineCard;