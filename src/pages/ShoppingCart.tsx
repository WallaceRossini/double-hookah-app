import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { Load } from '../components/Load';
import { Message } from '../components/Message';
import { ProductCardSecundary } from '../components/ProductCartSegundary';
import { loadShoppingCart, ProductProps, removeItem } from '../libs/storage';
import { theme } from '../styles/theme';

export function ShoppingCart() {

  const [shoppingCart, setShoppingCart] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

  function handleRemove(product: ProductProps) {
    Alert.alert('Remover', `Deseja remover a ${product.name} ?`, [
      {
        text: 'Não 🙏',
        style: 'cancel'
      },
      {
        text: 'Sim 😢',
        onPress: async () => {
          try {

            await removeItem(product.id)

            setShoppingCart(oldData =>
              oldData.filter((item) => item.id !== product.id)
            )

          } catch {
            Alert.alert('Não foi possível remover! 😢')
          }
        }
      }
    ])
  }


  useEffect(() => {

    async function loadStorageData() {

      const productsStorage = await loadShoppingCart();
      setShoppingCart(productsStorage)
      setLoading(false)
    }

    loadStorageData()

  }, [shoppingCart, setShoppingCart]);

  if (loading)
    return <Load />

  return (


    <View style={styles.container}>
      <View style={styles.shopping_cart}>
        <Text style={styles.title} />
        <FlatList
          data={shoppingCart}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (<ProductCardSecundary handleRemove={() => handleRemove(item)} data={item} />)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: theme.colors.secondary
  },
  shopping_cart: {
    flex: 1,
    width: '80%'
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    color: theme.colors.secondary,
    marginVertical: 20
  }
})