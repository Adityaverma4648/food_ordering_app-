import React from 'react';
import { View ,Text ,  ScrollView } from 'react-native';
import category from "../data/category.json";
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
           {category.map((d , index)=>{
             return <CategoryCard cousineName={d.name} imageUri = {d.image} key={index} />
         })}
           </ScrollView>
    </View>
  )
}

export default Category;