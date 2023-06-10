import React,{useState , useEffect} from 'react';
// import * as Location from 'expo-location';

const WelcomeScreen = () => {


  // const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  // const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
  //   'Wait, we are fetching you location...'
  // );

  // useEffect(() => {
  //   CheckIfLocationEnabled();
  // }, []);

  // const CheckIfLocationEnabled = async () => {
  //   let enabled = await Location.hasServicesEnabledAsync();

  //   if (!enabled) {
  //     Alert.alert(
  //       'Location Service not enabled',
  //       'Please enable your location services to continue',
  //       [{ text: 'OK' }],
  //       { cancelable: false }
  //     );
  //   } else {
  //     setLocationServiceEnabled(enabled);
  //   }
  // };

  return (
    <Text>Welcome</Text>
  )
}

export default WelcomeScreen