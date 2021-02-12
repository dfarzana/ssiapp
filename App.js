import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
