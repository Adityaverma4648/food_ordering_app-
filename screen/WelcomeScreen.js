import React,{useState , useLayoutEffect , useEffect} from 'react';
import { View , Text , Pressable ,SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ChevronDoubleRightIcon } from "react-native-heroicons/solid"

//  importing welcome cards
import WelcomeCard from "../component/WelcomeCard";

const WelcomeScreen = () => {

  const navigation = useNavigation();

  //  default navbar switched off
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [index, setIndex] = useState(0);
  const [arr, setArr] = useState([]);
  
  const indexSetter = (id) =>{
     setIndex(id-1);
  }
  
  useEffect(()=>{
    const res = [welcome[index]];
    setArr(res);
  },[index]);


    const welcome = [{
                        id : 1,
                        image : "https://images.unsplash.com/photo-1647431208004-6ebaa824bce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0OHx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
                        title : "The Experience Of Buying Food Quickly",
                        body : "",
                        allowAuth : true,
                      },{
                        id : 2,
                        image : "https://images.unsplash.com/photo-1647431208004-6ebaa824bce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0OHx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
                        title : "",
                        body : "",
                        allowAuth : true,
                      },{
                        id : 3,
                        image : "https://images.unsplash.com/photo-1647431208004-6ebaa824bce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0OHx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
                        title : "",
                        body : "",
                        allowAuth : true,
                      },{
                        id : 4,
                        image : "https://images.unsplash.com/photo-1647431208004-6ebaa824bce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0OHx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
                        title : "",
                        body : "",
                        allowAuth : true,
                      }]


  return (
    <SafeAreaView className="w-screen h-screen flex justify-center items-center relative bg-red-900/20" >
      <View className="w-screen h-4/5 bg-red-900 relative flex flex-col justify-center items-center">  
        
          <View className="w-full absolute top-0 end-0 p-4 flex flex-row justify-end items-center" >
          <Pressable
          className="w-1/4 flex flex-row justify-center items-center z-10 cursor-pointer"
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text>Visit Home</Text>
          <ChevronDoubleRightIcon color="#000" className="text-sm" size="16" />
        </Pressable>
       </View>


      <View className="w-full h-4/5 flex flex-row justify-start items-center ">
        {arr?.map((d) => {
          return (
            <WelcomeCard
              key={d.id}
              id={d.id}
              image={d.image}
              title={d.title}
              body={d.body}
              allowAuth={d.allowAuth}
            />
          );
        })}
      </View>
      {/*  slider buttons */}
        <View className="w-full absolute bottom-0 flex flex-row items-center justify-center mb-20 py-2">
        {welcome.map((d) => {
          return (
            <Pressable
              key={d.id}
              className="mx-2"
              onPress={() => {
                indexSetter(d.id);
              }}
            >
              <Text className="w-2 h-2 rounded-full bg-gray-400"></Text>
            </Pressable>
          );
        })}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;