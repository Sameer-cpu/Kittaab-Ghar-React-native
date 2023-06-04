/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Registeration} from './src/View/Authantication/Registertion';
import {HomeScreen} from './src/View/Home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/Types/Routes';
import {SearchScreen} from './src/View/Search/SearchScreen';
import {DetailView} from './src/View/DetailView/DetailView';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: 'Home',
            headerSearchBarOptions: {inputType: 'email'},
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Registeration" component={Registeration} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="DetailView" component={DetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
