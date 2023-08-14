import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React  ,{useState ,useEffect ,useLayoutEffect} from 'react'
import { View , Text , Image ,Pressable, SafeAreaView } from 'react-native'

const UniqueCousineScreen = ({route}) => {
   
   const navigation = useNavigation();


   //  default navbar switched off
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
     <SafeAreaView class="w-full h-full flex justify-center items-center bg-gray-200 relative" >
         <View className="w-full h-1/2 flex justify-center items-center bg-gray-500 relative" >
               
               <View className="h-full w-full flex justify-center items-center absolute">
                 <Image source={{uri : route.params.data.imageUri}} className="w-full h-full" ></Image>
               </View>
               <View className="w-full h-full flex justify-center items-center" >
                   <Text className="text-white font-bold text-xl">
                     {route.params.data.cousineName}
                   </Text>
               </View>
         </View>
     </SafeAreaView>
  )
}

export default UniqueCousineScreen;