import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Initial from '../pages/initial';
import Login from '../pages/login';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}