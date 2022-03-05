/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  FlatList,
  Image,
  ImageBackground,

} from 'react-native';
import { color } from 'react-native-reanimated';
import { styles } from './styles';

import GoBackIcon from '../../icons/GoBackIcon/GoBackIcon'
import ShoppingCartsIcon from '../../icons/ShoppingCartsIcon/ShoppingCartsIcon'


export default function App({ navigation }) {

  return (

    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 2.75,
        backgroundColor: 'red',
        flexDirection: 'row',
      }}>
        <ImageBackground style={styles.header} source={require('../../pic/Minimal_Chair.png')}>
          <GoBackIcon onPress={() => navigation.navigate('HomePage')} />
          <Text style={styles.title}>Product</Text>
          <ShoppingCartsIcon />
        </ImageBackground>


      </View>
      <View style={styles.checkoutBottom} />
    </SafeAreaView>
  );
}
