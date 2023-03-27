import React from 'react';
import { View ,Text ,  ScrollView } from 'react-native';
import cousine from "../data/cousine.json";
import CategoryCard from "./CategoryCard";
import {ChevronDoubleRightIcon , ChevronDoubleLeftIcon} from "react-native-heroicons/solid";

const Category = () => {
  return (
    <View className="w-full py-2 flex flex-col-reverse justify-center items-center h-40 border-y border-gray-400" horizontal={true} >
           <View className="w-full px-2 flex flex-row justify-end items-center" >
                <Text className="text-sm" >
                  <ChevronDoubleLeftIcon size={21} color="#000" />
                </Text>
                <Text className ="text-xl text-semibold " >
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