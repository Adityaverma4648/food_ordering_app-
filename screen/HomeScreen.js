import { View, Text, TextInput, Image, ScrollView , SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Cousine from "../component/Cousine";
import Category from "../component/Category";
import Attention from "../component/Attention";
import Header from "../component/Header";
import Resturants from "../component/Resturants";
import LocationComponent from "../component/LocationComponent";


const HomeScreen = () => {

  const navigation = useNavigation();


  //  default navbar switched off
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
   
  return (

    <SafeAreaView className="w-full h-auto flex flex-col justify-between items-center bg-white">
      
      <ScrollView className="w-full h-auto" showsVerticalScrollIndicator={true} >      
           <Header />
         
            <LocationComponent  />

            {/*  category Block */}
            <Category navigation={navigation} />
           {/*  category block ends here */}

           {/*  cousines Block */}
            <Cousine navigation={navigation} />
           {/*  cousines block ends here */}

          
           {/*  resturants */}
           <Resturants navigation={navigation} />
            
           {/*  attention block  */}
            <Attention />
           {/*  attention block ends here */}

      </ScrollView>
    </SafeAreaView>
   
  );
};

export default HomeScreen;
