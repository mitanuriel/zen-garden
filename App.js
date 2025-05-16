import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Navigator>
        <Screen name='AuthStack' component={AuthStack} />
        <Screen name='MainStack' component={AppStack} />
      
      
      </Navigator>
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
