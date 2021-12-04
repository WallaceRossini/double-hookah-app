import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Message } from '../components/Message';
import { ProductFooter } from '../components/ProductFooter';
import { ProductHeader } from '../components/ProductHeader';
import { ProductPlate } from '../components/ProductPlate';
import { ProductToggle } from '../components/ProductToggle';
import { ProductProps } from '../libs/storage';

import { theme } from '../styles/theme';

interface Params {
  product: ProductProps
}

export function Details() {

  const route = useRoute();

  const { product } = route.params as Params;

  return (
    <View style={styles.container}>
      <ProductHeader name={product.name} title={product.category.title} />
      <ProductToggle brand={product.brand} weight={product.weight} price={Number(product.price)} />
      <ProductPlate image={product.image} />
      <ProductFooter detail={product.detail} product={product} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent:'center',
    backgroundColor: theme.colors.secondary
  },
});