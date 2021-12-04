import { Feather } from '@expo/vector-icons';
import React from 'react'
import { Image, StyleSheet, Text, Animated, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ProductProps } from '../libs/storage';
import { theme } from '../styles/theme';


interface Props extends RectButtonProps {
  data: ProductProps
  handleRemove: () => void;

}

export const ProductCardSecundary = ({ data, handleRemove, ...rest }: Props) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() =>
      (
        <Animated.View>
          <View>
            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather name="trash" color={theme.colors.white} size={32} />
            </RectButton>
          </View>
        </Animated.View>
      )
      }

    >
      <RectButton
        style={styles.container}
        activeOpacity={0.7}
        {...rest}
      >
        <Image source={{uri: data.image}} style={styles.image} />
        <Text style={styles.title}>
          {data.name}
        </Text>
        <View style={styles.details}>
          <Text style={styles.timeLabel}>
            Qta: {data.amount}
        </Text>
          <Text style={styles.time}>
            ${data.amount * Number(data.price)}
          </Text>
        </View>
      </RectButton>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    marginVertical: 5
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    fontFamily: theme.fonts.bold,
    color: theme.colors.secondary
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  details: {
    alignItems: 'flex-end',
  },
  timeLabel: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.secondary,
  },
  time: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
  },
  buttonRemove:{
    width:100,
    height: 90,
    backgroundColor:theme.colors.danger,
    marginTop: 10,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    right: 20,
    paddingLeft: 15
  }
})