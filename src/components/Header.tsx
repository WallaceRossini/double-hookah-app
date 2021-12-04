import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../styles/theme';


export function Header() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Endereço de entrega</Text>
      {/* <TouchableOpacity onPress={handleShoppingCart} style={styles.button}>
        <Feather name='shopping-cart' size={25} color={theme.colors.white} />
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight()
  },
  button:{
    width: 50,
    height: 50,
    padding: 5,
    backgroundColor: theme.colors.danger,
  },
  greeting: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white
  },
})