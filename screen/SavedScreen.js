import React , {useLayoutEffect , useState} from 'react'
import { Text, View , SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SavedScreen = () => {

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
      Saved
    </Text>
  </SafeAreaView>
  )
}

export default SavedScreen;