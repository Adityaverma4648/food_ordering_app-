import React from 'react';
import { Image } from 'react-native';


const CategoryCard = ( cousineName, imageUri ) => {
  return (
    <View className="flex flex-column" >
           <View>
           <Image className="w-20 h-20"
               source={{
                uri : {imageUri}
               }}
            />
           </View>
           <View className="absolute text-sm" >
               {cousineName}
           </View>
    </View>
  )
}

export default CategoryCard;