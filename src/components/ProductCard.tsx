import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { ProductProps } from '../libs/storage';
import { theme } from '../styles/theme';


interface Props extends RectButtonProps {
  data: ProductProps
}

export const ProductCard = ({ data, ...rest }: Props) => {
  return (
    <RectButton
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <Image source={{ uri: data.image }} style={styles.image} />
      <Text style={styles.text}>
        {data.name}
      </Text>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={styles.sigla}>
          $
        </Text>
        <Text style={styles.price}>
          {data.price}
        </Text>
      </View>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10
  },
  image: {
    width: 60,
    height: 105,
    resizeMode: 'contain'
  },
  text: {
    color: theme.colors.secondary,
    fontFamily: theme.fonts.bold
  },
  sigla: {
    fontSize: 10,
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold
  },
  price: {
    fontSize: 15,
    color: theme.colors.secondary,
    fontFamily: theme.fonts.bold
  }
})