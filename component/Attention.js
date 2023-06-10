import React , {useState , useEffect} from 'react'
import { View ,Text , Image ,ScrollView } from 'react-native';
import { ArrowLeftCircleIcon , ArrowRightCircleIcon, GiftIcon } from "react-native-heroicons/solid";

const Attention = () => {

   const [data, setData] = useState([]);
   const [index, setIndex] = useState(0);

  const slider =  [
       {
         id : 1,
         uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTbEpVYz7kpxmgq9y6B2_JNqX2vKbGWw_UH0AmqPNTg&s",
       },{
       id : 2,
       uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTbEpVYz7kpxmgq9y6B2_JNqX2vKbGWw_UH0AmqPNTg&s",
       },
       {
         id : 3,
         uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTbEpVYz7kpxmgq9y6B2_JNqX2vKbGWw_UH0AmqPNTg&s",
       }];
  
   const increment = () =>{
       if(index < slider.length-1){
           setIndex(index+1);
       }
   }
   const decrement = () =>{
      if(index > 0){
        setIndex(index - 1 );
      }else{
         setIndex(0);
      }
   }

   useEffect(()=>{
      let array = new Array();
      array.push(slider[index]);
      setData(array);
   },[index])

  return (
    <View className="w-full h-screen flex flex-col justify-start items-center" >  
        <View className="w-full text-lg px-2 py-2 flex flex-row justify-start items-center" >
               <GiftIcon className="mx-1" color="#000" />
                <Text className = "mx-1  text-lg" >
                   Features And Offers
                </Text> 
        </View>
        <View className="w-full h-96 mx-1 flex flex-row justify-center items-center" >
             <ArrowLeftCircleIcon color="#000" className="left-0 absolute z-20" onPress={decrement} />
               <View className="w-10/12 h-full flex flex-row overflow-x justify-start items-center" >
               {data?.map((d)=>{
                 return (<View key={d.id} className="w-full h-96 flex flex-row justify-center items-center mx-1 bg-pink-400 overflow-hidden" >
                     <Image className="w-full h-full bg-red-900" source = {{
                        uri : d.uri
                     }}/>
                     <Text className = "absolute" >
                        {d.id}
                     </Text>
                 </View>);
               })}
               </View>
             <ArrowRightCircleIcon color="#000" className="absolute right-0 z-20" onPress={increment} />     
        </View>
    </View>
  )
}

export default Attention;