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
  Text,
  View,
  ImageBackground,
  

} from 'react-native';
import { styles } from './styles';
import AddCartIcon from '../../icons/AddCartIcon/AddCartIcon';
import GoBackIcon from '../../icons/GoBackIcon/GoBackIcon'
import ShoppingCartsIcon from '../../icons/ShoppingCartsIcon/ShoppingCartsIcon'
import HeartLikeIcon from '../../icons/HeartLikeIcon/HeartLikeIcon';
import RatingStar from '../../icons/RatingStar/RatingStar';
import ColerPickerIcon from '../../icons/ColerPickerIcon/ColerPickerIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {TouchableHighlight} from 'react-native-gesture-handler'

const image = { uri: "https://reactjs.org/logo-og.png" };
export default function App({ navigation, route }) {

  return (

    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 3,
        backgroundColor: '#DDDDE8',
        flexDirection: 'column',

      }}>
        <ImageBackground style={styles.header} source={require('../../pic/Minimal_Chair.png')}>
          <TouchableOpacity onPress={() => navigation.navigate('HomePage')} >
            <GoBackIcon />
          </TouchableOpacity>

          <Text style={styles.titleProduct}>Product</Text>
          <ShoppingCartsIcon />
        </ImageBackground>
        <View style={styles.HeartLike} >
          <HeartLikeIcon />
        </View>
      </View>
      <View style={styles.checkoutBottom} >
        <Text style={{ justifyContent: 'center', color: "#F26B6B", fontSize: 15, fontWeight: 'bold', lineHeight: 18, fontFamily: 'Poppins' }}>{route.params.price}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}>{route.params.title}</Text>
          <RatingStar style={{ flex: 1, right: 20 }} />
        </View>
        {/* <Text style={{ fontWeight: '500' }}>Color option</Text> */}
        <ColerPickerIcon />
        <View style={{ top: 20 }}>
          <Text style={{ fontWeight: '500', }}>Description</Text>
          <Text style={{ fontWeight: '400', color: "#B8B8CD", top: 10, marginRight: 50 }}>
            Lorem ipsum dolor sit amet, consectetuer adipis
            cing elit, sed diam nonummy nibh euismod tincid
            unt ut
            laoreet dolore magna.</Text>

        </View>

        <View style={styles.AddCartIcon} >
          <Text style={{color:'#fff'}}>+  Add to Cart </Text>
        </View>


      </View>
    </SafeAreaView>
  );
}
