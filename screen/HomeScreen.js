import { View, Text, TextInput, Image, ScrollView , SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {FaMapMarkerAlt,FaStream} from "react-icons/fa";
import { firebase } from '@react-native-firebase/database';
import dish from "../data/dish.json";
import Header from '../component/Header';
import Footer from '../component/Footer';
import DishCard from "../component/DishCard";


const HomeScreen = () => {

  const navigation = useNavigation();
  const [text, setText] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  const handleSearchBar = (e) =>{
    setText(e.target.value);
  }
   
  return (

    <SafeAreaView className="min-w-screen min-h-screen flex flex-col justify-between items-center bg-white">
      <Header className="h-2/11" />
      <View className="w-full h-8/12 flex flex-row justify-start items-center bg-red-500 overflow-x-scroll">
          {dish.map((d,index)=>{
              return <DishCard key={index} orgImage={d.originalURL} image={d.imageURL} name={d.name} ingredients={d.ingredients} steps={d.steps} />
          })}
      </View>
      {/*  Footer------------------------------------------------------------------------------ */}
      {/* <Footer className="h-2/12" /> */}
      {/* block ends here ------------------------------------------------------------------------------ */}
    </SafeAreaView>
   
  );
};

export default HomeScreen;
