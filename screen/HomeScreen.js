import { View, Text, TextInput, Image, ScrollView , SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {FaMapMarkerAlt,FaStream} from "react-icons/fa";
import { firebase } from '@react-native-firebase/database';
import dish from "../data/dish.json";
import Header from '../component/Header';
import Footer from '../component/Footer';
import DishCard from "../component/DishCard";
import Category from "../component/Category";

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

    <SafeAreaView className="w-full h-full flex flex-col justify-between items-center">
      <Header className="top-0 left-0 right-0 absolute" />

      {/*  category Block */}

      <Category />

      {/*  category block ends here */}
 
      <ScrollView className="w-full h-auto bg-slate-900 flex flex-column overflow-y-scroll">
          <View className="w-full h-96 flex flex-row justify-start items-center" >
          {dish.map((d,index)=>{
              return <DishCard key={index} originalURL = {d.originalURL} image={d.imageURL} name={d.name} ingredients={d.ingredients} steps={d.steps} />
          })}
          </View>
      </ScrollView>
      <ScrollView>
          <View>
              {/* <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis corporis delectus vitae laborum doloremque est perferendis quisquam nisi at consequatur officiis dicta totam distinctio laboriosam autem quae harum molestias, ad ducimus voluptates alias quia! Vitae minima accusamus beatae voluptate officiis error quidem nostrum nisi fugiat similique explicabo cum, est quod nesciunt eius sapiente illum aliquam voluptates quibusdam aspernatur iure sit eligendi! Deleniti, molestiae. Mollitia tempora, quasi voluptates nostrum iure enim labore! Dolore nemo quae, delectus aspernatur vitae sapiente.
              </Text> */}
          </View>
      </ScrollView>

      <Footer className="bottom-0 absolute left-0 right-0 z-50" />
    </SafeAreaView>
   
  );
};

export default HomeScreen;
