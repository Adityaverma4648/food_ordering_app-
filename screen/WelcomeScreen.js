import React,{useState , useLayoutEffect , useEffect} from 'react';
import { View , Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native';

//  importing welcome cards
import WelcomeCard from "../component/WelcomeCard";



const WelcomeScreen = () => {

  const navigation = useNavigation();

  //  default navbar switched off
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


    const welcome = [{
                        id : 1,
                        image : "",
                        title : "",
                        body : ""
                      },{
                        id : 2,
                        image : "",
                        title : "",
                        body : ""
                      },{
                        id : 3,
                        image : "",
                        title : "",
                        body : ""
                      },{
                        id : 4,
                        image : "",
                        title : "",
                        body : ""
                      }]


  return (
    <View className="w-screen h-full flex justify-center items-center">
        <ScrollView className="w-full h-full flex bg-red-400" horizontal={true} >
           {welcome.map((d)=>{
              return <WelcomeCard key={d.id} data={d} /> 
           })}
        </ScrollView>
    </View>
  )
}

export default WelcomeScreen;