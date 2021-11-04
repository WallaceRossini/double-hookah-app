import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from '../styles/theme';
import Lottie from 'lottie-react-native';

import delivery from '../assets/delivery.json';
import { useNavigation } from '@react-navigation/native';


export function Welcome() {

  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Tudo de bom {'\n'}
          para seus roĺes de {'\n'}
          forma fácil
        </Text>

        <Lottie style={styles.image} source={delivery} autoPlay loop />

        <Text style={styles.subtitle}>
          Não fique mais sem sua sessão. Nós {'\n'}
          cuidamos de lembrar você {'\n'}
          sempre que precisar.
        </Text>

      <TouchableOpacity
         style={styles.button}
         activeOpacity={0.7}
         onPress={handleStart}
      >
        <Feather name='chevron-right' style={styles.buttonIcon} />
      </TouchableOpacity>

      </View>

    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: theme.colors.secondary
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: theme.colors.white,
    marginTop: 38,
    fontFamily: theme.fonts.bold,
    lineHeight: 34,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    color: theme.colors.white,
    fontFamily: theme.fonts.regular
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 16,
    height: 56,
    width: 56
  },
  buttonIcon: {
    color: theme.colors.white,
    fontSize: 32
  }
})