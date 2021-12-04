

import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { theme } from '../styles/theme';
import { addCart, ProductProps } from '../libs/storage';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Params {
  product: ProductProps
}

export function ProductButton({ product }: Params) {

  const navigate = useNavigation()

  async function hanbleAddCart() {
    try {
      
      await addCart({
        ...product
      })

      Alert.alert('Produto adicionado no carrinho. 😄');
      navigate.navigate('Home')

    } catch (err) {
      Alert.alert('Não foi possível salvar. 😢');
    }
  }

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.8}
      onPress={hanbleAddCart}
    >
      <Text style={styles.text}>
        Comprar
      </Text>

      <Feather
        name="shopping-cart"
        size={24}
        color={theme.colors.white}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: 50,
    width: 180,
    borderRadius: 50,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
    fontSize: 16
  },
});