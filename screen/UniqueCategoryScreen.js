import React , {useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View , SafeAreaView ,Text , Image  } from 'react-native';

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
    <View className="w-full h-1/2 flex justify-center items-center bg-gray-500 relative" >
          
          <View className="h-full w-full flex justify-center items-center absolute">
            <Image source={{uri : route.params.data.image }} className="w-full h-full" ></Image>
          </View>
          <View className="w-full h-full flex justify-center items-center" >
              <Text className="text-white font-bold text-xl">
                {route.params.data.name}
              </Text>
          </View>
    </View>
</SafeAreaView>
  )
}

export default UniqueCategoryScreen