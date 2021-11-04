import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { theme } from '../styles/theme'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.regular
  }
})