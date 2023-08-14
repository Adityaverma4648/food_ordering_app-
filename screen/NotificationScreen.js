import React,{useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

const NotificationScreen = () => {

  const navigation = useNavigation();

  //  default navbar switched off
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Text>NotificationScreen</Text>
  )
}

export default NotificationScreen