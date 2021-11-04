import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../styles/theme';


export function Header() {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Endereço de entrega</Text>
      </View>

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
  greeting:{
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white
  },
})