import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

import { LinearGradient } from "expo-linear-gradient";

import {MapIcon, MapPinIcon} from "react-native-heroicons/outline"

import Loader from "./Loader";

const LocationComponent = () => {
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    (async () => {
      // Request location permission
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.error("Permission to access location was denied.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      let { latitude, longitude } = location.coords;

      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);

      let geocode = await Location.reverseGeocodeAsync({ latitude, longitude });

      setCountry(`${geocode[0].country}`);
      setCity(`${geocode[0].city}`);
    })();
  }, [latitude, longitude, country]);

  return (
    <View className="w-full flex justify-center items-center rounded-xl mt-2 overflow-hidden"  >
      {country ? (
        <View
          className="w-full h-full flex flex-col justify-center items-center relative"
          
        >
          <View className="w-full h-full flex justify-center items-center relative">
            <MapView
              className="bg-gray-400"
              style={{ width: "100%", height: "100%" }}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{ latitude: latitude, longitude: longitude }}
                title="Marker Title"
                description="Marker Description"
              />
            </MapView>
          </View>

          <View className="absolute bottom-0 bg-white blur-md m-2 p-2 flex flex-row justify-center items-center w-11/12" >
               <View className="" >
                   <MapPinIcon color="#000" size={25} />
               </View>
               <View className="w-4/5 flex flex-row justify-end items-center" > 
                   <Text className="font-normal text-md mx-1" >
                      {city}
                   </Text>
                   <Text className="text-right font-semibold text-lg">
                     ({country})
                   </Text>
                  
               </View>
          </View>
        </View>
      ) : (
        <View className="w-full h-full flex justify-center items-center relative">
            <View className="w-full h-full flex justify-center items-center absolute animate-ping">
                <MapIcon size={100} color="rgba(0,0,0,0.2)" />
            </View>
            <View className="w-full h-full flex justify-center items-center relative z-10">
            <Loader message="Fetching your current location" />            
            </View>
        </View>
      )}
    </View>
  );
};

export default LocationComponent;
