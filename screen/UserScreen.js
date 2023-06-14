import React,{ useState , useEffect , useLayoutEffect } from 'react';
import { View , Text, SafeAreaView , TextInput , Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../component/Header';
import Footer from '../component/Footer';
import { EyeIcon } from 'react-native-heroicons/solid';

const intialState = {
  userName : "",
  password : ""  
};

const UserScreen = () => {

  const navigation = useNavigation();

  //  removing default navigation bar
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [formValue, setFormValue] = useState(intialState);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  

  const handleSubmit = () =>{
    if(password && userName){
      console.log("submit");

    }else{
      alert("Fill all Entries!");
    }
   }

const handleVisibility = () =>{
  setVisible(!visible);
}
  
  return (
    <>
    <SafeAreaView className="w-screen h-full flex flex-column justify-between items-center mb-2 relative " >

      <View className="w-full h-full flex flex-col justify-start items-center z-10 relative">
      
     
           <View className="w-11/12 flex flex-col justify-center items-center py-4" >

                <View className="w-full justify-center flex items-center my-2" >
                   <View className="flex justify-center items-center">
                                  
                   </View>
                   <Text className="font-semibold text-xl" >
                     Login 
                   </Text>
                </View>
              
                <View className="mb-2 w-full h-10 flex justify-center items-center border border-gray-500/50 rounded-md px-1">
                  <TextInput 
    
                  className='w-full h-full px-2' 
                  value={userName}  
                  placeholder='UserName'
                  onChangeText={(text)=>{setUserName(text)}}
                  />
                </View>

                 <View className="mb-2 w-full h-10 flex flex-row justify-between items-center border border-gray-500/50 rounded-md px-1">
                   <TextInput 

                   className='w-10/12 h-full px-2'
                   value={password}
                   placeholder='Password'
                   secureTextEntry={true}
                   secure={true}
                   onChange={(text)=>{setPassword(text)}}
                   />
                   <Pressable onPress={handleVisibility} >
                     <EyeIcon color="rgba(0,0,0,0.2)" />
                   </Pressable>
                 </View>
                  {visible && <View className="mb-2 w-full h-10 flex flex-row justify-start items-center rounded-md px-1" >
                     <Text className="" > 
                        {password ? <Text className='text-black' >{JSON.stringify(password)}</Text> : <Text>Empty</Text>}
                     </Text>
                  </View>}
                 <View className="mb-1 w-full h-10 rounded-md px-1 flex flex-row justify-center items-center border border-gray-500/50 gradient bg-indigo-500/50" >
                    <Pressable className=" selection:w-full h-full flex flex-row justify-center items-center rounded-md px-2 bg-transparent" onPress={handleSubmit} >
                        <Text className="text-center text-black/60" >
                          Submit
                        </Text>
                    </Pressable>
                 </View>

                 <View className=" w-full h-10 rounded-md px-1 flex flex-row justify-start items-center" >
                    <Pressable className="w-full h-full flex flex-row justify-start items-center rounded-md bg-transparent" onPress={()=>{
                    navigation.navigate('Register')
                 }} >
                        <Text className="text-red-400 text-sm " >
                           Do not have an account?
                        </Text>
                    </Pressable>
                 </View>
              
           </View>
        </View>



        <Footer navigation={navigation} className="bottom-0 left-0 right-0 absolute z-50" />
    </SafeAreaView>

    </>
  );
}

export default UserScreen;