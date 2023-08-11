import React,{ useState , useEffect , useLayoutEffect } from 'react';
import { View , Text, SafeAreaView , TextInput , Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../component/Footer';
import { EyeIcon } from 'react-native-heroicons/solid';

const intialState = {
  email : "",
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  

  const handleSubmit = () => {
    if (password && email) {
      setFormValue({
        email: email,
        password: password,
      });
      console.log(formValue);
      fetch("http://localhost:7000/auth/login", formValue, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: "email@gmail.com",
          password: "password",
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Fill all Entries!");
    }
  };

  const handleVisibility = () => {
    setVisible(!visible);
  };
  
  return (
    <>
    <SafeAreaView className="w-screen h-full flex flex-column justify-between items-center mb-2 relative " >

      <View className="w-full h-full flex flex-col justify-start items-center z-10 relative">
      
     
           <View className="w-11/12 flex flex-col justify-center items-center py-4" >

                <View className="w-full h-1/2 flex flex-col justify-start items-center my-2" >
                   <View className="w-full flex justify-center items-center">
                        <Text className="text-2xl font-semibold" >
                            Welcome Back
                        </Text>
                   </View>
                   <Text className="text-md" >
                        Sign Up to continue !
                   </Text>
                   <View className="flex justify-center items-center" >
                        
                   </View>
                </View>
              
                <View className="mb-2 w-full h-10 flex justify-center items-center border border-gray-500/50 rounded-md px-1">
                  <TextInput 
                  className='w-full h-full px-2' 
                  value={email}  
                  placeholder='Email'
                  onChangeText={(text)=>{setEmail(text)}}
                  />
                </View>

                 <View className="mb-2 w-full h-10 flex flex-row justify-between items-center border border-gray-500/50 rounded-md px-1">
                   <TextInput 
                   className='w-10/12 h-full px-2'
                   value={password}
                   secureTextEntry
                   placeholder='Password'
                   onChange={(text)=>{setPassword(text)}}
                   />
                   <Pressable onPress={handleVisibility} >
                     <EyeIcon color="rgba(0,0,0,0.2)" />
                   </Pressable>
                 </View>
                  {/* {visible && <View className="mb-2 w-full h-10 flex flex-row justify-start items-center rounded-md px-1" >
                     <Text className="" > 
                        {password ? <Text className='text-black' >{JSON.stringify(password)}</Text> : <Text>Empty</Text>}
                     </Text>
                  </View>} */}
                 <View className="mb-1 w-full h-10 rounded-md px-1 flex flex-row justify-center items-center border border-gray-500/50 gradient bg-slate-900" >
                    <Pressable className=" selection:w-full h-full flex flex-row justify-center items-center rounded-md px-2 bg-transparent" onPress={handleSubmit} >
                        <Text className="text-center text-white" >
                          Submit
                        </Text>
                    </Pressable>
                 </View>

                 <View className=" w-full h-10 rounded-md px-1 flex flex-row justify-start items-center" >
                    <Pressable className="w-full h-full flex flex-row justify-start items-center rounded-md bg-transparent" onPress={()=>{
                       navigation.navigate('Register')
                    }}  >
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