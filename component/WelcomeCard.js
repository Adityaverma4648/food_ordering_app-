import React from 'react'
import { View , Text , Image } from 'react-native'
import { ScrollView , Pressable } from 'react-native';

const WelcomeCard = (props) => {

  return (
    <View className="text-xl w-full h-full flex justify-center items-center relative" >
         <View className="relative w-full h-full flex flex-col justify-center items-center" >
            <View className="w-full h-full flex justify-center items-center bg-purple-500" >
               <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore fugiat architecto, velit tempore id rem. Corporis placeat nam, dicta voluptas possimus ad incidunt eaque iure! Voluptatum rem officia explicabo, atque magni ad porro.
               </Text>
            </View>
            {props.allowAuth && <View className="w-full h-2/5 flex flex-col justify-center items-center absolute z-10 bottom-0" >
                <Pressable className="w-11/12 px-2 py-1 my-1 flex justify-center items-center outline-none border-0" >
                      <Text className="text-xl font-semibold">
                         Register
                      </Text>
                </Pressable>
                <Pressable className="w-11/12 px-2 py-1 my-1 flex justify-center items-center outline-none border-0" >
                      <Text className="text-xl font-semibold">
                         Login
                      </Text>
                </Pressable>
            </View> }
         </View>
         <View className='absolute w-full h-full flex items-center justify-center' >
           <Image source={{uri : props.image}} alt={props.title} >
           </Image> 
         </View>
    </View>
  )
}

export default WelcomeCard;