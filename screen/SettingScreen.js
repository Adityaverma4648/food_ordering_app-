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
        <Header className="top-0 right-0 left-0 absolute z-40" />
        
        <View>
          
        </View>

        <Footer navigation={navigation} className="bottom-0 left-0 right-0 absolute z-50" />

   </SafeAreaView>
  )
}

export default SettingScreen;