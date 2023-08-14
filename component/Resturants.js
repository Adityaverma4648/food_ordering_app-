import React from 'react'
import { View , ScrollView ,Text ,Pressable ,Image } from 'react-native';
import resturantsData from "../data/restaurants.json";

const Resturants = () => {
  return (
    <View className="w-full h-full flex justify-center items-center" style={{height : 350}}>

        <View className="w-full flex flex-row justify-start items-center p-2" >
            <Text className="font-bolder text-lg">
                Resturants
            </Text>
        </View>
        <ScrollView  className="w-full h-full flex flex-col p-2 bg-gray-200" style={{height : 300}}>
         {resturantsData.map((d ,index)=>{
              return <View key={index} className="h-full flex flex-col justify-center items-center relative bg-gray-200 space-x-1 mx-1 overflow-hidden" style={{width : "100%"}} >
                          <View className="h-full w-full flex justify-center items-center absolute" >
                                <Image source={{uri : d.menu[0].image}} className="w-full h-full" ></Image>
                          </View>
                          <Text>{d.name}</Text>
                     </View>
         })}
    </ScrollView>
    </View>
  )
}

export default Resturants