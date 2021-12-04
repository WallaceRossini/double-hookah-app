import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { MotiView } from 'moti';
import { theme } from '../styles/theme';
import { ProductButton } from './ProductButton';
import { ProductProps } from '../libs/storage';

interface Props {
  detail: string;
  product: ProductProps
}

export function ProductFooter({ detail, product }: Props) {

  const [amount, setAmount] = useState<number>(1)

  useEffect(()=>{
      async function verifyAmount() {
        if(amount==0){
          setAmount(1)
        }
        product.amount = amount
      }

      verifyAmount()
  },[amount,setAmount])

  return (
    <MotiView
      from={{
        opacity: 0
      }}

      animate={{
        opacity: 1
      }}
      transition={{
        type: 'timing',
        duration: 3000
      }}
    >
      <Text style={styles.label}>
        Descrição
      </Text>

      <Text style={styles.text}>
        {detail}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>

        </Text>

        <View style={styles.group}>
          <TouchableOpacity style={styles.buttonAction} onPress={() => setAmount(oldValue => ( oldValue <=1 ? 1 : oldValue-=1))}>
            <Text style={styles.amount}>-</Text>
          </TouchableOpacity>
          <View style={styles.box}>
            <Text style={styles.amount}>
              {amount}
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonAction} onPress={() => setAmount(oldValue => ( oldValue == 10 ? 10 : oldValue+=1))}>
            <Text style={styles.amount}>+</Text>
          </TouchableOpacity>
        </View>


        <ProductButton product={product} />
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    fontSize: 34
  },
  label: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    fontSize: 17,
  },
  text: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
    fontSize: 14,
    lineHeight: 18,
    marginVertical: 15
  },
  group: {
    flexDirection: 'row',
    height: 45,
    marginRight: 10,
    justifyContent: 'space-between'
  },
  box: {
    width: 45,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white
  },
  amount: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    color: theme.colors.secondary,
    textAlign: 'center',
  },
  buttonAction: {
    width: 45,
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary
  }
});