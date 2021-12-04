import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { CategoryButton } from '../components/CategoryButton';
import { Header } from '../components/Header';
import { loadShoppingCart, ProductProps } from '../libs/storage';
import api, { category_data } from '../services/api';
import { theme } from '../styles/theme';
import { ProductCard } from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Load } from '../components/Load';

interface CategoryProps {
  key: string;
  title: string;
}

export function Home() {

  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filterProducts, setFilterProducts] = useState<ProductProps[]>([]);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [categorySelected, setCategorySelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [search, setSearch] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  function handleFetchMore(distance: number) {
    if (distance < 2)
      return;

    setLoadingMore(true);
    setSkip(oldValue => oldValue + 10)
    fetchProducts();
  }

  function handleDetails(product: ProductProps) {
    setSearch('');
    navigation.navigate('Details', { product })
  }

  function handleCategorySelected(category: string) {
    setCategorySelected(category);

    if (category == 'all')
      return setFilterProducts(products)

    const filtered = products.filter(product =>
      product.category.key.includes(category))

    setFilterProducts(filtered);
  }

  function fetchSearch() {
    setFilterProducts(products)
    const all = filterProducts.filter(item => {
      if (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase()) ||
        item.category.title.toLowerCase().includes(search.toLowerCase()))
        return item
    })
    setFilterProducts(all)
    if (!search || search === '') {
      setFilterProducts(products)
    }

  }


  useEffect(() => {
    async function fecthCategories() {

      const { data } = await api.get('categories')

      setCategories([
        {
          key: "all",
          title: "Todos"
        },
        ...data
      ])
    }

    fecthCategories();
  }, [])


  async function fetchProducts() {

    const { data } = await api.get(`products?skip=${skip}&take=${take}`);

    if (!data)
      return setLoading(true);

    data.forEach((item: ProductProps) => {
      item.amount = 1
    })

    if (skip > 0) {
      setProducts(oldValue => [...oldValue, ...data])
      setFilterProducts(oldValue => [...oldValue, ...data])
    } else {
      setProducts(data);
      setFilterProducts(data);
    }

    setLoading(false)
    setLoadingMore(false)

  }

  useEffect(() => {
    fetchProducts();
  }, [])

  useEffect(() => {
    fetchSearch()
  }, [search])


  if (loading)
    return <Load />


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={styles.header}>

            <Header />

            <View style={styles.search}>

              <FontAwesome name='search' color={theme.colors.secondary} size={20} style={styles.icon} />
              <TextInput
                value={search}
                style={styles.text}
                placeholder="Item ou marca"
                onChangeText={(text) => setSearch(text)}
              />
            </View >
          </View>
        </TouchableWithoutFeedback>

        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item.key)}
            contentContainerStyle={styles.categoryList}
            data={categories}
            renderItem={({ item }) =>
              <CategoryButton
                title={item.title}
                action={item.key === categorySelected}
                onPress={() => handleCategorySelected(item.key)}
              />
            }
          />
        </View>
        <View style={styles.products}>
          <FlatList
            data={filterProducts}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ProductCard
                data={item}
                onPress={() => handleDetails(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
            ListFooterComponent={
              loadingMore
                ? <ActivityIndicator color={theme.colors.primary} />
                : <></>
            }
          />
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary
  },
  header: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 17,
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontSize: 17,
    color: theme.colors.white,
    fontFamily: theme.fonts.regular,
    lineHeight: 20,
  },
  categoryList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    paddingHorizontal: 20,
    marginVertical: 10
  },
  products: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  search: {
    width: '100%',
    height: 40,
    marginTop: 20,
    backgroundColor: theme.colors.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderRadius: 8
  },
  icon: {
    padding: 10
  },
  text: {
    width: '80%',
    padding: 10,
    fontFamily: theme.fonts.regular,
    color: theme.colors.secondary,
    fontSize: 16,

  }
})