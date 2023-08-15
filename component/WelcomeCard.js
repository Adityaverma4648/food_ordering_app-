import React from 'react'
import { View , Text , Image ,ScrollView , Pressable} from 'react-native'
 
const WelcomeCard = ({id , image ,title ,body ,showQuickAuthOptions , getStartedOptions }) => {

  return (
    <View className="text-xl flex justify-start items-center relative overflow-hidden" style={{width : 430 ,height : 850  }} >

            <View className=" bg-white/20 relative z-10 flex justify-between items-center" style={{height : "80%" ,width : "90%" }} >

                  <View className="">

                  </View>

                  {getStartedOptions && <View className="w-full h-1/3 flex flex-col justify-center items-center" >
                                             <Pressable className="w-11/12 h-10 rounded-lg mt-1 flex justify-center items-center bg-red-500" onPress={()=>{NavigationPreloadManager.navigate()}} >
                                                <Text className="text-white" >
                                                    Get Started
                                                </Text>
                                             </Pressable>   
                                          </View>}

                 {showQuickAuthOptions && <View className="w-full h-1/3 flex flex-col justify-center items-center" >
                                             <Pressable className="w-full h-10 rounded-lg mt-1 flex justify-center items-center bg-blue-100" onPress={()=>{NavigationPreloadManager.navigate()}} >
                                                <Text>
                                                    Register 
                                                </Text>
                                             </Pressable>

                                             <Pressable className="w-full h-10 rounded-lg mt-1 flex justify-center items-center bg-blue-100" onPress={()=>{NavigationPreloadManager.navigate()}} >
                                                <Text>
                                                    Login 
                                                </Text>
                                             </Pressable>     
                                          </View>}
            </View>

            <Image source={require('../assets/render1.png')} className="w-full h-full absolute"></Image>


       
    </View>
  )
}

export default WelcomeCard;