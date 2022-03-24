/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './app/screen/Homepage';
import CartPage from './app/screen/CartPage';
import DetaiPage from './app/screen/DetaiPage';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import allReducter from './app/redux/counter';
const store = createStore(allReducter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(allReducter);

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
          <Stack.Screen name="DetaiPage" component={DetaiPage} options={{ headerShown: false }} />
          <Stack.Screen name="CartPage" component={CartPage} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};


