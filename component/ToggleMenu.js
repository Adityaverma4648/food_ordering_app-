import React,{useState} from 'react'
import { View , Text , Image } from 'react-native';
import { BellAlertIcon , ClockIcon  , ShieldExclamationIcon , Cog6ToothIcon , ChatBubbleBottomCenterIcon , XMarkIcon} from "react-native-heroicons/solid";

const ToggleMenu = (props) => {

  const liElement = [{
                       id : 1,
                       icon : <BellAlertIcon />,
                       text : "Notification",
                       route : "Notification",
                  
                      },
                      {
                       id : 2,
                       icon : <ClockIcon />,
                       text : "History",
                       route : "History",

                      },
                      {
                       id : 3,
                       icon : <ChatBubbleBottomCenterIcon />,
                       text : "Chat",
                       route : "Chat",

                      },
                      {
                       id : 4,
                       icon : <ShieldExclamationIcon />,
                       text : "Terms and Condition",
                       route : "TermsAndCondition",

                      },
                      {
                        id : 5,
                        icon : <Cog6ToothIcon />,
                        text : "Setting",
                        route : "Setting",
                       }
]

  const dismissMenu = (e) =>{
      props.parentCallBack(true);
      e.preventDefault();
  }

  return (
    <View className="w-3/4 h-full bg-white left-0 top-0 bottom-0 absolute z-50 py-5">
        <View className="w-full h-1/5 flex flex-row justify-center items-center bg-slate-900" >
             <View className="w-3/4 px-2 h-full flex flex-row justify-start items-center">
               <View className="flex justify-center items-center rounded-full">
                    <Image className="w-20 h-20 rounded-full" source={{ 
                      uri : "https://www.simplyrecipes.com/thmb/lapjIm2IrSHGS8ptjyhspa_BboU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Tandoori-Chicken-LEAD-01-7767f2892b824b24b65213f3ba28ff8c.jpg",
                    }} />
                    <View className="w-full px-2 text-xl flex flex-col">
                         <Text className="text-md text-white" >
                                  UserName 
                         </Text>
                         <Text className="text-xsm text-gray-500" >
                                  userEmail
                        </Text>
                    </View>
               </View>
             </View>
             <View className="w-1/4 h-full py-3 d-flex justify-start items-center" >
                 <Text className="" onPress={(e)=>{
                   dismissMenu(e)
                 }} >
                 <XMarkIcon color="#fff" />
                 </Text>
             </View>
        </View>
        <View className="w-full my-3 flex flex-column justify-center items-center" >
             {liElement.map((d)=>{
                  return(
                     <View className='w-10/12 py-2 px-2 flex flex-row justify-start items-center cursor-pointer' key={d.id} onPress={(e)=>{
                            {props.navigation.navigate(d.route)}
                     }} >
                        <Text>
                          {d.icon}
                        </Text>
                        <Text>
                           {d.text}
                        </Text>    
                     </View>
                  )
             })}
        </View>
    </View>
  )
}

export default ToggleMenu