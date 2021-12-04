
import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

import { StyleSheet } from "react-native";
import { theme } from "../styles/theme";

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { GoBack } from './GoBack';

interface Props {
  name: string,
  title: string;
}

export function ProductHeader({ name, title }: Props) {

  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  })

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 3000 })
  })

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
        <GoBack  auto/>
      <View>
        <Text style={styles.title}>
          {name}
        </Text>

        <Text style={styles.subtitle}>
          {title}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    fontSize: 28,
  },
  subtitle: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.white,
    fontSize: 20,
    alignSelf: 'flex-end',
  },
});