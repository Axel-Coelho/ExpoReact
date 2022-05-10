import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from './src/style/App.style';
import Contenu from './src/components/Contenu';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
//StatusBar
import { Screen } from './src/components/Screen'
//Navigation
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Snake game
import Snake from './src/snakegame/screens/SnakeGame';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text><br />
      <Button
        title="Play Snake !"
        onPress={() => navigation.navigate('Snake')}
      /><br />
      <Button
        title="Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SnakeGame({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> The Snake ! </Text><br />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text><br />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Snake" component={Snake} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}