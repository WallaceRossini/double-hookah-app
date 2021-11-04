import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { CategoryButton } from '../components/CategoryButton';
import { Header } from '../components/Header';
import { ProductProps } from '../libs/storage';
import api, { category_data } from '../services/api';
import axios from 'axios'
import { theme } from '../styles/theme';
import { SearchBar } from '../components/SearchBar';
import { ProductCard } from '../components/ProductCard';

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
  const [loadingMore, setLoadingMore] = useState(false);

  function handleFetchMore(distance: number) {
    if (distance < 2)
      return;

    setLoadingMore(true);
    setSkip(oldValue => oldValue + 10)
    fetchProducts();
  }

  function handleCategorySelected(category: string) {
    setCategorySelected(category);

    if (category == 'all')
      return setFilterProducts(products)

    const filtered = products.filter(product =>
      product.category.includes(category))

    setFilterProducts(filtered);
  }


  useEffect(() => {
    async function fecthCategories() {

      setCategories([
        {
          key: "all",
          title: "Todos"
        },
        ...category_data
      ])
    }

    fecthCategories();
  }, [])


  async function fetchProducts() {

    const { data } = await api.get(`products?skip=${skip}&take=${take}`);

    if (!data)
      return setLoading(true);


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



  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Header />
        <SearchBar />
      </View>

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
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore
              ? <ActivityIndicator color={theme.colors.primary} />
              : <></>
          }
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginLeft: 32,
    marginVertical: 10
  },
  products: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  },
  contentContainerStyle: {

  }
})