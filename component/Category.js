import React from 'react';
import { View ,Text ,  ScrollView } from 'react-native';
import cousine from "../data/cousine.json";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <View className="w-full py-1 flex flex-col justify-center items-center h-40 border-y border-gray-500/50" horizontal={true} >
           <View className="w-full px-2 my-1  flex flex-row justify-end items-center" >
                <Text className ="text-lg text-semibold " >
                   Category
                </Text>
           </View>
           <ScrollView className="px-1 w-full h-full flex" horizontal={true} >
           {cousine.map((d)=>{
             return <CategoryCard cousineName={d.cousineName} imageUri = {d.imageUri} key={d.id} />
         })}
           </ScrollView>
    </View>
  )
}

export default Category;