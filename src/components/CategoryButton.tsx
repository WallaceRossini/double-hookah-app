import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { theme } from '../styles/theme';

interface CategoryButtonProps extends RectButtonProps {
  title: string,
  action?: boolean
}

export function CategoryButton({ title, action = false, ...rest }: CategoryButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        action && styles.containerActive
      ]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[
        styles.text,
        action && styles.textActive
        ]}>
        {title}
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    height: 40,
    minWidth:76,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5

  },
  containerActive: {
    backgroundColor: theme.colors.primary
  },
  text: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.secondary
  },
  textActive: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.white
  }
})