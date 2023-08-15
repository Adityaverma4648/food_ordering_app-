import React , {useLayoutEffect , useState , useEffect} from 'react';
import { View , Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UniqueResturantScreen = ({route}) => {

    const navigation = useNavigation();

    //  default navbar switched off
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

    console.log(route.params.data);

  return (
    <SafeAreaView className="w-full h-full flex justify-center items-center bg-red-100">
      <Text>
      UniqueResturantScreen
      </Text>
    </SafeAreaView>
  )
}

export default UniqueResturantScreen