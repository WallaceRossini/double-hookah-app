import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/Button';
import { GoBack } from '../components/GoBack';

import { theme } from '../styles/theme';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😁'
}
export function Confirmation() {

  const navitagion = useNavigation();

  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;

  function handleMoveOn() {
    navitagion.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <GoBack />

      <View style={styles.content}>

        <Text style={styles.emoji}>{emojis[icon]}</Text>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>

        <View style={styles.footer}>

          <Button title={buttonTitle} onPress={handleMoveOn} />

        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
    color: theme.colors.white,
    lineHeight: 38,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: theme.fonts.regular,
    textAlign: 'center',
    color: theme.colors.white,
    paddingVertical: 20,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  },
})