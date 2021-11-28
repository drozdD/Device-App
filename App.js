import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Img from "./components/icon.jpg"
import { Image, StyleSheet } from 'react-native';

import Screen1 from "./components/Screen1"
import Screen2 from "./components/Screen2"

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator style={styles.navigator}>
        <Tab.Screen name="home" options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={Img} style={styles.image} />
          )
        }} component={Screen1} />
        <Tab.Screen name="info" component={Screen2} options={{
          title: 'device info',
          headerStyle: {
            backgroundColor: '#00A5C3',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: () => (
            <Image source={Img} style={styles.image} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
    borderRadius: 60,
  },
  navigator: {
    height: 200,
  }
});

export default App;