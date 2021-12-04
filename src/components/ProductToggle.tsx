import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti';
import * as Localization from 'expo-localization';

import { theme } from '../styles/theme';
import { curreryFormate } from '../libs/storage';

interface Props {
  brand: string;
  weight: string;
  price: number
}

export function ProductToggle({ brand, weight,price}: Props) {

  const [toggleInOpen, setToggleInOpen] = useState(true);

  const toggleAnimatedState = useAnimationState({
    closed: {
      height: 70
    },
    open: {
      height: 230
    }
  })

  function handleToggle() {
    
    if (!toggleInOpen) {
      toggleAnimatedState.transitionTo('open')
      setToggleInOpen(true)
    } else {
      toggleAnimatedState.transitionTo('closed')
      setToggleInOpen(false);
    }

  }

  useState(()=>{
    function toggleOpen() {
    
      if (toggleInOpen) 
        toggleAnimatedState.transitionTo('open')
      else 
        toggleAnimatedState.transitionTo('closed')
    }
    
    toggleOpen()

  })

  return (
    <MotiView
      style={styles.container}
      state={toggleAnimatedState}

    >
      <Pressable
        onPress={() => handleToggle()}
      >
        {
          toggleInOpen ?
            <AnimatePresence>

              <MotiView
                from={{
                  rotate: '0deg',
                  opacity: 0
                }}
                animate={{
                  rotate: '90deg',
                  opacity: 1,

                }}

                transition={{
                  type: 'timing',
                }}
              >
                <Feather
                  name="x"
                  color={theme.colors.white}
                  size={26}
                />
              </MotiView>
            </AnimatePresence>
            :
            <MotiView
              from={{
                scale: 0,
                opacity: 0,
              }}

              animate={{
                scale: [
                  { value: 0, type: 'timing' },
                  { value: 1.1, type: 'spring' },
                  { value: 1, type: 'timing' }
                ],
                opacity: 1,
              }}
            >
              <Feather
                name="tag"
                color={theme.colors.white}
                size={26}
              />
            </MotiView>
        }
      </Pressable>
      <View style={styles.info}>
        <Text style={styles.label}>
          Marca
        </Text>

        <Text style={styles.value}>
          {brand}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>
          Peso
        </Text>

        <Text style={styles.value}>
          {weight}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>
          Preço
        </Text>

        <Text style={styles.value}>
          ${curreryFormate(String(price))}
        </Text>
      </View>
    </MotiView >
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    top: 150,
    left: 24,

    width: 70,
    height: 70,
    overflow: 'hidden',

    backgroundColor: theme.colors.primary,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderTopEndRadius: 30,
    alignItems: 'center',
    paddingVertical: 21
  },
  info: {
    marginTop: 20
  },
  label: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.secondary,
    fontSize: 14,
  },
  value: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
    fontSize: 15
  },
});