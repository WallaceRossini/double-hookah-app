import React from 'react';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { theme } from "../styles/theme";

interface Props {
  auto?: boolean
}

export function GoBack({ auto }: Props) {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <View style={[styles.container, { width: auto ? 'auto' : '100%', paddingHorizontal: auto ? 0 : 20 }]} >
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleGoBack}
      >
        <Feather name='chevron-left' style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    justifyContent: 'flex-end'
  },
  button: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    height: 40,
    width: 40
  },
  buttonIcon: {
    color: theme.colors.primary,
    fontSize: 20
  },
})