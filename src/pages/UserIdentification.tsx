import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Button } from '../components/Button';
import { GoBack } from '../components/GoBack';
import { theme } from '../styles/theme';


export function UserIdentification() {

  const navigation = useNavigation()

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }


  async function handleSubmit() {
    if (!name)
      return Alert.alert('Me diz como chamar você 😢');

    try {

      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar dos seus pedidos com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'Home'
      })
    } catch {
      Alert.alert('Não foi possível salvar o seu nome. 😢');
    }
  }


  return (
    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >

        <GoBack />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


          <View style={styles.content}>

            <View style={styles.form}>

              <View style={styles.header}>

                <Text style={styles.emoji}>
                  {isFilled ? '😄' : '😃'}
                </Text>

                <Text style={styles.title}>
                  Como podemos{'\n'} chamar você?
                </Text>

              </View>

              <TextInput
                style={[styles.input, (isFocused || isFilled) && { borderColor: theme.colors.primary }]}
                placeholder="Digite um nome"
                placeholderTextColor={theme.colors.white}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}

              />

              <View style={styles.footer}>

                <Button title="Confirmar" onPress={handleSubmit} />

              </View>

            </View>

          </View>

        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44
  },
  input: {
    borderBottomWidth: 2,
    borderColor: theme.colors.white,
    color: theme.colors.white,
    width: '100%',
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    marginTop: 20,
  },
  header: {
    alignItems: 'center'
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20
  }
})