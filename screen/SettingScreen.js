import React from 'react';
import { View , Text , SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SettingScreen = () => {

  const navigation = useNavigation();

//  removing default navigation bar
  useLayoutEffect(()=>{
    navigation.setOptions({
     headerShown: false,
    });
  }, []);

  return (
   <SafeAreaView>
      
        <View>
           <Text>
              Setting 
           </Text>
        </View>

      

   </SafeAreaView>
  )
}

export default SettingScreen;