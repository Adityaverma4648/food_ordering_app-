import React , {useState , useLayoutEffect} from 'react';
import { View , Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ExploreScreen = () => {

  const navigation = useNavigation();

  //  default navbar switched off
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="h-full w-full flex justify-center items-center bg-red-100" style={{padding : 20}} >
      <Text className="font-bolder text-lg" >
        Explore
      </Text>
    </SafeAreaView>
  )
}

export default ExploreScreen;