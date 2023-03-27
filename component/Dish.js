import React from 'react';
import {View , Text , ScrollView} from "react-native";
import dish from "../data/dish.json";
import DishCard from './DishCard';

const Dish = () => {
  return (
    <ScrollView className="w-full h-96 flex flex-row" horizontal={true} >
          {dish.map((d,index)=>{
              return <DishCard  key={index} originalURL = {d.originalURL} image={d.imageURL} name={d.name} ingredients={d.ingredients} steps={d.steps} />
          })}
    </ScrollView>
  )
}

export default Dish