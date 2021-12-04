import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { createIconSetFromIcoMoon, MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { theme } from '../styles/theme';
import { Home } from '../pages/Home';
import { ShoppingCart } from '../pages/ShoppingCart';

const tabRoutes = createBottomTabNavigator();

const Icon = createIconSetFromIcoMoon(
  require('../resources/icon/selection.json'),
  'IcoMoon',
  'icomoon.ttf'
);

const AuthRoutes = () => (
  <tabRoutes.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:theme.colors.primary,
      tabBarInactiveTintColor:theme.colors.white,
      tabBarLabelPosition:'beside-icon',
      tabBarStyle:{
        backgroundColor: theme.colors.secondary,
        paddingVertical: Platform.OS === 'ios' ? 5 : 0,
      }
    }}
  >
    <tabRoutes.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: (({ size, color }) => (
          <Icon name="home" size={size} color={color} />
        ))
      }}
    />

    <tabRoutes.Screen
      name="Carrinho"
      component={ShoppingCart}
      options={{
        tabBarIcon: (({ size, color }) => (
          <Icon name="shopping-cart" size={size} color={color} />
        ))
      }}
    />


  </tabRoutes.Navigator>
)

export default AuthRoutes;