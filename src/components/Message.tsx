import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme, type_message } from '../styles/theme';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  type: 'success' | 'danger' | 'info' | 'warning'
  nextScreen?: string;
  display?: boolean
}


interface TypeProps {
  type: string,
  color: string,
  image: any
}

export function Message({ title, subtitle, buttonTitle, type, nextScreen, display= true}: Params) {


  const navigation = useNavigation();
  const [typeProps, setTypeProps] = useState<TypeProps>();
  const [visible,setVisible] = useState(display);


  async function handleOnPress(){

    if(nextScreen)
      navigation.navigate(nextScreen)
    
    setVisible(false)
  }

  useEffect(() => {

    async function getType() {
      type_message.filter(item => {
        if (item.type == type) {
          
          console.log(item.type,type)
          setTypeProps(item)
        }
      })
    }

    getType()
  }, [])

  return (

    <View style={[styles.container,{display: visible ? 'flex' : 'none'}]}>
      <View style={styles.card}>
        <Image source={typeProps?.image} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <TouchableOpacity style={[styles.button,{backgroundColor: typeProps?.color}]} onPress={handleOnPress}>
          <Text style={styles.buttonTitle}>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin: 20
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.bold,
    color: theme.colors.secondary,
    margin: 5
  },
  subtitle: {
    fontSize: 16,
    fontFamily: theme.fonts.light,
    color: theme.colors.secondary,
    margin: 5
  },
  button:{
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 10,
    margin: 20
  },
  buttonTitle:{
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white
  }
})