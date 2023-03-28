import React from 'react'
import { View ,Text , Image ,ScrollView } from 'react-native'

const Attention = () => {

  const Slider =  [{
       id : 1,
       uri : "",
       content : "<View className='flex flex-row justify-evenly items-center'><Text onPress={(e)=>SignUp(e)}>SignUp</Text><Text onPress={(e)=>Login(e)}>Login</Text></View>"

  },{
    id : 2,
    uri : "",
    content : "<View className='flex flex-row justify-evenly items-center'><Text onPress={(e)=>SignUp(e)}>SignUp</Text><Text onPress={(e)=>Login(e)}>Login</Text></View>"

}]

  return (
    <View >  
        <Text className="text-xl px-2" >
               Features And Offers
        </Text>
        <View className="w-screen py-2 mx-2 h-3/4 bg-purple-300" >
             <View className="w-full h-full flex justify-center items-center bg-red-500" >
             <Image 
                 className="w-11/12 h-11/12" 
                 source={{ 
                      uri : "https://www.simplyrecipes.com/thmb/lapjIm2IrSHGS8ptjyhspa_BboU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Tandoori-Chicken-LEAD-01-7767f2892b824b24b65213f3ba28ff8c.jpg",
                    }} 
              />
             </View>
        </View>
    </View>
  )
}

export default Attention;