import React,{useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View , Text , Image , Pressable } from 'react-native';
import { BellAlertIcon , ClockIcon  , ShieldExclamationIcon , Cog6ToothIcon , ChatBubbleBottomCenterIcon , XMarkIcon} from "react-native-heroicons/solid";
import {LinearGradient} from 'expo-linear-gradient';

const ToggleMenu = ({parentCallBack}) => {

  const navigation = useNavigation();

  const liElement = [{
                       id : 1,
                       icon : <BellAlertIcon color="#000" />,
                       text : "Notification",
                       route : "Notification",
                  
                      },
                      {
                       id : 2,
                       icon : <ClockIcon color="#000" />,
                       text : "History",
                       route : "Home",

                      },
                      {
                       id : 3,
                       icon : <ChatBubbleBottomCenterIcon color="#000" />,
                       text : "Chat",
                       route : "Chat",

                      },
                      {
                       id : 4,
                       icon : <ShieldExclamationIcon color="#000" />,
                       text : "Terms and Condition",
                       route : "TermsAndCondition",

                      },
                      {
                        id : 5,
                        icon : <Cog6ToothIcon color="#000" />,
                        text : "Setting",
                        route : "Setting",
                       }
]


  return (
    <View className="w-3/4 h-11/12 bg-white left-0 top-0 text-white bottom-0 absolute z-50">
        <LinearGradient colors={["#0f172a" , "#1d2842"]} start={{  x: 0, y: 0 }}  end={{ x: 1, y: 1 }} className="w-full h-1/5 flex flex-row justify-center items-center bg-slate-900" >
             <View className="w-3/4 px-2 h-full flex flex-row justify-start items-center">
               <View className="flex justify-center items-center rounded-full">
                    <Image className="w-12 h-12 rounded-full" source={{ 
                      uri : "https://www.simplyrecipes.com/thmb/lapjIm2IrSHGS8ptjyhspa_BboU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Tandoori-Chicken-LEAD-01-7767f2892b824b24b65213f3ba28ff8c.jpg",
                    }} />
                    <View className="w-full px-2 text-xl flex flex-col">
                         <Text className="text-md text-white" >
                                  UserName 
                         </Text>
                         <Text className="text-sm text-gray-500" >
                                  userEmail
                        </Text>
                    </View>
               </View>
             </View>
             <View className="w-1/4 h-full py-3 d-flex justify-start items-center" >
                 <Pressable onPress={()=>{
                   parentCallBack(false);
                 }} >
                 <XMarkIcon color="#fff" />
                 </Pressable>
             </View>
        </LinearGradient>
        <View className="w-full my-2 flex flex-column justify-center items-center" >
             {liElement.map((d)=>{
                  return(
                     <Pressable className='cursor-pointer w-11/12 py-3 px-2 my-1 flex flex-row justify-start items-center ' key={d.id} onPress={()=>{navigation.navigate(d.route)}}>
                                 <View>
                                   {d.icon}
                                 </View>
                                <Text className="px-2" >
                                   {d.text}
                                </Text> 
                        
                     </Pressable>
                  )
             })}
        </View>
    </View>
  )
}

export default ToggleMenu;