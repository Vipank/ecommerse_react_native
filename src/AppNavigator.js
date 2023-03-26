import {View, Text} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';

const stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        {/* <stack.Screen options={{headerShown : false}} name="Splash" component={Splash} /> */}
        {/* <stack.Screen options={{headerShown : false}} name="Login" component={Login} /> */}
        <stack.Screen options={{headerShown : false}} name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
