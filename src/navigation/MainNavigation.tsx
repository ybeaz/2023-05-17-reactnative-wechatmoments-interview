import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../features/Home/ui/Home';
import {Profile} from '../features/Profile/ui/Profile';

const Stack = createNativeStackNavigator();
const MainNavigation = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Moments', headerTransparent: true}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Moments', headerTransparent: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
