import { View, Text, TextInput, Image, ScrollView , SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from '@react-native-firebase/database';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Cousine from "../component/Cousine";
import Category from "../component/Category";
import Dish from "../component/Dish";
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
      <Header navigation={navigation} className="top-0 left-0 right-0 absolute" />

      <ScrollView className="w-full h-auto" showsVerticalScrollIndicator={true} >   
            <View className=" w-screen h-3/12 py-2 bg-red-500" >
                 <View>

                 </View>
                 <View className="w-full h-1/4">
                     <Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore assumenda repudiandae ut in!
                     </Text>
                 </View>
                   
            </View>   
           {/*  category Block */}
            <Cousine />
           {/*  category block ends here */}
           {/*  category Block */}
            <Category />
           {/*  category block ends here */}

            <Attention />

           {/*  Dishblock  */}
            {/* <Dish /> */}

           {/*  Dish block ends here  */}


          
      </ScrollView>

      <Footer navigation={navigation} className="bottom-0 absolute left-0 right-0 z-50" />
    </SafeAreaView>
   
  );
};

export default HomeScreen;
