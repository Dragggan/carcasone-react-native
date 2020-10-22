import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NumberOfPlayersModal from './components/numberOfPlayersModal';
import ChoosePlayers from './components/choosePlayers';
import GamePage from './components/gamePage';

const Stack = createStackNavigator();




const StackNavigator = () => {
return (
  <Stack.Navigator>
    <Stack.Screen name="Numbeplayers" component={NumberOfPlayersModal} />
    <Stack.Screen name="ChoosePlayers" component={ChoosePlayers} />
    <Stack.Screen name="GamePage" component={GamePage} />
  </Stack.Navigator>
)
};

export default function App() {
  return (
    <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
