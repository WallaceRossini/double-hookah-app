import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { ShoppingCart } from '../pages/ShoppingCart';
import { theme } from '../styles/theme';
import AuthRoutes from './tab.routes';

type StackParamList = {
  Welcome: undefined;
  UserIdentification: undefined;
}

const stackRoutes = createStackNavigator();


const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    initialRouteName='Welcome'
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: theme.colors.secondary
      }
    }}
  >
    <stackRoutes.Screen name='Welcome' component={Welcome} />
    <stackRoutes.Screen name='UserIdentification' component={UserIdentification} />
    <stackRoutes.Screen name='Confirmation' component={Confirmation} />
    <stackRoutes.Screen name='Home' component={AuthRoutes} />
    <stackRoutes.Screen name='Details' component={Details} />
    
  </stackRoutes.Navigator>
)

export default AppRoutes