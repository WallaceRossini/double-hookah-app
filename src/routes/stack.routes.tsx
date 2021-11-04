import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { Home } from '../pages/Home';
import { theme } from '../styles/theme';

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
    <stackRoutes.Screen name='Home' component={Home} />
    
  </stackRoutes.Navigator>
)

export default AppRoutes