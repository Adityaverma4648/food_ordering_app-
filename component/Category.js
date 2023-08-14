import React from 'react';
import { View ,Text ,  ScrollView } from 'react-native';
import category from "../data/category.json";
import CategoryCard from "./CategoryCard";

const Category = ({navigation}) => {

  return (
    <View className="w-full flex flex-col justify-center items-center bg-red-100 mt-2 " horizontal={true} style={{height : 200}} >
           <View className="p-2 w-full h-10 flex flex-row justify-start items-center" >
                <Text className ="text-xl font-semibold " >
                   Category
                </Text>
           </View>
           <ScrollView className="w-full flex flex-1" contentContainerStyle={{justifyContent : "center" ,alignItems : 'center'}} horizontal={true} >
           {category.map((d , index)=>{
             return <CategoryCard navigation={navigation}  name={d.name} image = {d.image} key={index} data={d} />
         })}
           </ScrollView>
    </View>
  )
}

export default Category;