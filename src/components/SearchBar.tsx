import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../styles/theme';

export function SearchBar() {

  const [search,setSearch] = useState('');
  const [error, setError] = useState()

  return (
    <View style={styles.container}>

      <FontAwesome name='search' color={theme.colors.secondary} size={20} style={styles.icon} />
      <TextInput
        value={search}
        style={styles.text}
        placeholder="Item ou marca"
        onChangeText={(text) => setSearch(text) }
      />
    </View >
  )

}

const styles = StyleSheet.create({
  container: {
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