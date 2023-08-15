import React from 'react';
import { StyleSheet , Text, View, ScrollView , TouchableOpacity } from 'react-native';
import CousineCard from './CousineCard';
import cousine from "../data/cousine.json";

const Cousines = ({navigation}) => {
  return (
    <View className="w-full h-40" style={{height : 200}} >
           <View className="flex h-14  justify-center items-center" >
           <Text className="w-full my-2 text-xl font-semibold px-2 text-start" >
               Cousines
           </Text>
           </View>
           <ScrollView className="px-1 w-full flex flex-1" horizontal={true} contentContainerStyle={{justifyContent : "center" ,alignItems : 'center'}}>
           {cousine.map((d)=>{
             return <CousineCard data={d} navigation={navigation} id={d.id} name={d.cousineName} image = {d.imageUri} key={d.id} />
         })}
           </ScrollView>
    </View>
  )
}

export default Cousines;