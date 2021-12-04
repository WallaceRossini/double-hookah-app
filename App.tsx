import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading'
import { useFonts, Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    IcoMoon:require('./src/resources/icon/icomoon.ttf'),
  });



  if(!fontsLoaded)
      return <AppLoading />

  return (
    <Routes />
  );
}
