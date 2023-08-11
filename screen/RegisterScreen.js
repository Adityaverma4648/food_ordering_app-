import React , {useState} from 'react'
import { View , Text } from 'react-native';

const RegisterScreen = () => {

  const navigation = useNavigation();

  //  removing default navigation bar
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [formValue, setFormValue] = useState(intialState);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  

  const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_URL}/auth/google/callback`,
			"_self"
		);
	};

  const handleSubmit = () =>{
    if(password && userName && userEmail ){
      console.log("submit");

    }else{
      alert("Fill all Entries!");
    }
   }

  return (
    <View className="w-full h-full flex flex-col justify-start items-center z-10 relative">
      <View className="w-11/12 flex flex-col justify-center items-center py-4" >
           <View className="w-full h-1/2 flex flex-col justify-start items-center my-2" >
              <View className="w-full flex justify-center items-center">
                   <Text className="text-2xl font-semibold" >
                       Create An Account 
                   </Text>
              </View>
              <Text className="text-md" >
                   Sign In to continue !
              </Text>
              <View className="flex justify-center items-center" >
                   
              </View>
           </View>
         
           <View className="mb-2 w-full h-10 flex justify-center items-center border border-gray-500/50 rounded-md px-1">
             <TextInput 
             className='w-full h-full px-2' 
             value={userName}  
             placeholder='UserName'
             onChangeText={(text)=>{setUserName(text)}}
             />
           </View>

           <View className="mb-2 w-full h-10 flex justify-center items-center border border-gray-500/50 rounded-md px-1">
             <TextInput 
             className='w-full h-full px-2' 
             value={email}  
             placeholder='Email'
             onChangeText={(text)=>{setUserEmail(text)}}
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
            <View className="mb-1 w-full h-10 rounded-md px-1 flex flex-row justify-center items-center border border-gray-500/50 gradient bg-slate-900" >
               <Pressable className=" selection:w-full h-full flex flex-row justify-center items-center rounded-md px-2 bg-transparent" onPress={handleSubmit} >
                   <Text className="text-center text-white" >
                     Submit
                   </Text>
               </Pressable>
            </View>

            <View>
               <Text>
                  OR
               </Text>
            </View>

            <View>
               <pressable onPress={googleAuth}>
						      {/*  Icons */}
					       	<span>Sign up with Google</span>
					    </pressable>
            </View>

            <View className=" w-full h-10 rounded-md px-1 flex flex-row justify-start items-center" >
               <Pressable className="w-full h-full flex flex-row justify-start items-center rounded-md bg-transparent" onPress={()=>{
               navigation.navigate(Register)
            }} >
                   <Text className="text-red-400 text-sm " >
                      Do not have an account?
                   </Text>
               </Pressable>
            </View>
      </View>
    </View>
  )
}

export default RegisterScreen;