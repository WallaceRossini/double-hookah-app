import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from 'expo-localization';

export interface ProductProps {
  id: string;
  name: string;
  price: string;
  detail: string;
  category: CategoryProps
  image: string;
  weight: string;
  brand: string;
  amount: number
}

export interface CategoryProps {
  id: string;
  key: string;
  title: string;
}

export const curreryFormate =(value: string) => {
  const price = new Intl.NumberFormat(Localization.locale, {currency: 'BRL',minimumFractionDigits:2 }).format(Number(value));

  return String(parseFloat(price).toFixed(2)).replace('.',',')
}


export interface StorageProductProps {
  [id: string]: {
    data: ProductProps;
  }
}

export async function addCart(product: ProductProps): Promise<void> {
  try {

    const data = await AsyncStorage.getItem('@double_hookah:shopping_cart');

    const oldProducts = data ? (JSON.parse(data)) as StorageProductProps : {};

    const newItem = {
      [product.id]: {
        data: product
      }
    }

    const shopping_cart = JSON.stringify({
      ...newItem,
      ...oldProducts
    });

    // console.log(shopping_cart)

    await AsyncStorage.setItem("@double_hookah:shopping_cart", shopping_cart);


  } catch (err) {
    console.log(err)
  }
}

export async function loadShoppingCart(): Promise<ProductProps[]> {

  try {

    const data = await AsyncStorage.getItem('@double_hookah:shopping_cart');

    const products = data ? (JSON.parse(data) as StorageProductProps) : {};


    const shoppingCart = Object
      .keys(products)
      .map((product) => {
        return { ...products[product].data }
      })

    return shoppingCart;

  } catch (error) {
    console.log(error)
    throw new Error()
  }

}

export async function removeItem(id: string): Promise<void> {
  const data = await AsyncStorage.getItem('@double_hookah:shopping_cart')

  const products = data ? (JSON.parse(data) as StorageProductProps) : {};

  delete products[id];

  await AsyncStorage.setItem(
    '@double_hookah:shopping_cart',
    JSON.stringify(products)
  );
}