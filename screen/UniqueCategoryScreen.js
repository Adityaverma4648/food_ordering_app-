import React , {useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View , SafeAreaView ,Text , Image ,Pressable  } from 'react-native';

import {ArrowLeftIcon, HomeIcon} from "react-native-heroicons/solid";
import { LinearGradient } from 'expo-linear-gradient';

const UniqueCategoryScreen = ({route}) => {

    const navigation = useNavigation();
    //  default navbar switched off
   useLayoutEffect(() => {
     navigation.setOptions({
       headerShown: false,
     });
   }, []);

   console.log(route.params.data);

  return (
    <SafeAreaView class="w-full h-full flex justify-center items-center bg-gray-200 relative" >
    <View className="w-full flex justify-center items-center relative" style={{height : 250}} >
          
          <View className="h-full w-full flex justify-center items-center absolute">
            <Image source={{uri : route.params.data.image }} className="w-full h-full" ></Image>
          </View>
          <LinearGradient colors={["transparent" , "rgba(0,0,0,0.6)"]} className="w-full h-full flex justify-center items-center relative z-10" >
              <Text className="text-gray-200 font-bold text-3xl">
                Explore All Delicious {route.params.data.name} Dishes
              </Text>
          </LinearGradient>

          <Pressable className="absolute top-0 left-0 m-8 bg-white w-8 h-8 rounded-full flex justify-center items-center" onPress={()=>{navigation.navigate("Home")}}>
             <ArrowLeftIcon color={`#000`} />
          </Pressable>
    </View>

    <View className="w-full flex flex-1 justify-center items-center bg-gray-500" >
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur veniam ipsum aliquid aliquam. Quibusdam aliquid rerum, distinctio earum libero optio, ab laudantium qui magnam neque molestias? Quia blanditiis ipsa temporibus!
        </Text>
    </View>
</SafeAreaView>
  )
}

export default UniqueCategoryScreen