import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import cousine from "../data/cousine";

const Category = () => {
  return (
    <ScrollView className="w-full bg-gray-300" horizontal={true} >
           <Text className="w-full text-xl text-semibold px-2 text-start" >
               Cousines
           </Text>
         {cousine.map((d)=>{
             return <CategoryCard cousineName={d.cousineName} imageUri = {imageUri} key={d.id} />
         })}
    </ScrollView>
  )
}

export default Category;