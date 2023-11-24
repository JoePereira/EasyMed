// /src/navigation/AppNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Login from '../screens/Login';
import Registro from '../screens/Registro';
import Home from '../screens/Home';

type RootStackParamList = {
  Registro: undefined;
  Login: undefined;
  Home: undefined;
};

export type RegistroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Registro'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registro">
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
