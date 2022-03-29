/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect, useState } from 'react';


import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';

import HeartLikeIcon from '../../icons/HeartLikeIcon/HeartLikeIcon';
import RatingStar from '../../icons/RatingStar/RatingStar';
import ColerPickerIcon from '../../icons/ColerPickerIcon/ColerPickerIcon';
import  SliderBox from "../../components/sliderbox"
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import allReducter from '../../redux';
import { createStore } from 'redux';
import Header from '../../components/header';



const store = createStore(allReducter);
const images = [
  require('../../static/images/Minimal_Chair.jpg'),
  require('../../static/images/Elegant_White_Chair.jpg'),
  require('../../static/images/Vintage_Chair.jpg'),
  require('../../static/images/Minimal_Chair1.jpg'),
];
export default function App({ navigation, route }) {
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);
  const list_cart = useSelector(state => state.Carts);

  const handladd = (c) => {
    for (var i = 0; i < list_cart.length; i++) {
      if (list_cart[i].id === c) {
        return console.log('ton tai')
      }
    }
    return setNum(num + 1)
  }
  const setname = () => {
    store.dispatch({
      type: 'SET_name',
      name: 'Product',
    })
  }

  useEffect(() => {
    setNum(list_cart.length)
    const unsubscribe = navigation.addListener('focus', () => {
          setname()
    });
    return unsubscribe;
  })
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 3,
        backgroundColor: '#fff',
        flexDirection: 'column',
        height: "100%",
        width: "100%",
        marginBottom: 10
      }}>
        <View style={styles.headericon}>
          <Header parentToChild={num} />
          <SliderBox />
          <LinearGradient style={styles.LinearGradient} colors={['rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 1)']} deg={180} />
        </View>
        <HeartLikeIcon style={styles.HeartLike} />

      </View>
      <View style={styles.checkoutBottom} >
        <View style={{ flexDirection: 'row', height: 20 }}>
          <Text style={styles.price}>${route.params.price.toFixed(2)}</Text>
          <RatingStar style={{ flex: 1, marginTop: 20, marginRight: 30, marginBottom: 20, }} />
        </View>
        <Text style={styles.title}>{route.params.title}</Text>
        <ColerPickerIcon />
        <View style={{ top: 20 }}>
          <Text style={{ fontWeight: '500', }}>Description</Text>
          <Text style={styles.describe}>
            Lorem ipsum dolor sit amet, consectetuer adipis
            cing elit, sed diam nonummy nibh euismod tincid{"\n"}
            unt ut{"\n"}
            laoreet dolore magna.</Text>
        </View>
        <TouchableOpacity style={styles.AddCartIcon} onPress={() => store.dispatch({
          type: 'ADD_CART',
          id: route.params.id,
          title: route.params.title,
          price: route.params.price,
          dec: route.params.dec,
          pic: route.params.pic
        }) & handladd()}>
          <Text style={{ color: '#fff', fontSize: 20 }} > +  Add to Cart </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView >
  );
}