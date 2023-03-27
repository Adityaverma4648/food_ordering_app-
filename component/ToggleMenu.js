import React,{useState} from 'react'
import { View , Text } from 'react-native';
import {XCircleIcon , XMarkIcon} from "react-native-heroicons/solid";

const ToggleMenu = (props) => {


  const [visibility, setVisibility] = useState(false);

  const dismissMenu = (e) =>{
      // setVisibility(true)
      props.parentCallBack(true);
      e.preventDefault();
  }

  return (
    <View className="w-3/4 h-full bg-white left-0 top-0 bottom-0 absolute z-50 py-5">
        <View className="w-full h-4/12 flex flex-row justify-center items-center bg-slate-900" >
             <View className="w-3/4 h-4/12 bg-purple-300" >
               <Text>
                 Image and UserName
               </Text>
             </View>
             <View className="w-1/4 d-flex justify-start items-center" >
                 <Text className="" onPress={(e)=>{
                   dismissMenu(e)
                 }} >
                 <XMarkIcon color="#fff"  />
                 </Text>
             </View>
        </View>
        <Text>
           ToggleMenu
        </Text>
    </View>
  )
}

export default ToggleMenu