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
import HomePage from './screen/Homepage';
import CartPage from './screen/CartPage';
import DetaiPage from './screen/DetaiPage';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducter from './redux';
const store = createStore(allReducter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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


