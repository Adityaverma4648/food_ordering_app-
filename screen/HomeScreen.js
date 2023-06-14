import { View, Text, TextInput, Image, ScrollView , SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Cousine from "../component/Cousine";
import Category from "../component/Category";
import Attention from "../component/Attention";


const HomeScreen = () => {

  const navigation = useNavigation();
  const [text, setText] = useState('');

  //  default navbar switched off
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
      <ScrollView className="w-full h-auto" showsVerticalScrollIndicator={true} >      
           {/*  cousines Block */}
            <Cousine />
           {/*  cousines block ends here */}

           {/*  category Block */}
            <Category />
           {/*  category block ends here */}
            
           {/*  attention block  */}
            <Attention />
           {/*  attention block ends here */}

           {/*  */}
      </ScrollView>
    </SafeAreaView>
   
  );
};

export default HomeScreen;
