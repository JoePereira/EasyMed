import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registro from './src/screens/Registro'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { UsuariosProvider } from './src/context/UsuariosContext';

export default function App() {
  return (
    <UsuariosProvider>
      <AppNavigator/>
    </UsuariosProvider>
  );
}

