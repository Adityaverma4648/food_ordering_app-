import React from 'react';
import { StyleSheet , Text, View, ScrollView , TouchableOpacity } from 'react-native';
import CousineCard from './CousineCard';
import cousine from "../data/cousine.json";

const Cousines = () => {
  return (
    <View className="w-full h-40" >
           <Text className="w-full my-2 text-lg 
Search Dishes....
text-semibold px-2 text-start" >
               Cousines
           </Text>
           <ScrollView className="px-1 w-full h-full flex" horizontal={true} >
           {cousine.map((d)=>{
             return <CousineCard cousineName={d.cousineName} imageUri = {d.imageUri} key={d.id} />
         })}
           </ScrollView>
    </View>
  )
}

export default Cousines;