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

import GoBackIcon from '../../icons/GoBackIcon/GoBackIcon'
import ShoppingCartsIcon from '../../icons/ShoppingCartsIcon/ShoppingCartsIcon'
import HeartLikeIcon from '../../icons/HeartLikeIcon/HeartLikeIcon';
import RatingStar from '../../icons/RatingStar/RatingStar';
import ColerPickerIcon from '../../icons/ColerPickerIcon/ColerPickerIcon';
import { SliderBox } from "react-native-image-slider-box"
import LinearGradient from 'react-native-linear-gradient';

const images = [
  require('../../pic/Minimal_Chair.png'),
  require('../../pic/Elegant_White_Chair.jpg'),
  require('../../pic/Vintage_Chair.jpg'),
  require('../../pic/Vintage_Chair.jpg'),
];

export default function App({ navigation, route }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 3,
        backgroundColor: '#fff',
        flexDirection: 'column',
        height: "100%",
        width: "100%",
      }}>
        <View style={styles.headericon}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 25, backgroundColor: '#fff' }}>
            <GoBackIcon onPress={() => navigation.navigate('HomePage')} />
            <Text style={styles.titleProduct}>Product</Text>
            <ShoppingCartsIcon onPress={() => navigation.navigate('CartPage')}/>
          </View>
          <SliderBox
            style={{
              height: "100%",
              width: "100%",
              borderBottomLeftRadius: 80,
              borderBottomRightRadius: 80,
              paddingBottom: 40,
            }}
            images={images}
            sliderBoxHeight={500}
            onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
            dotColor="#2A2D3F"
            inactiveDotColor="#90A4AE"
            dotStyle={styles.dot}
          />
          <LinearGradient style={{
            height: "25%", width: "100%",
            position: "absolute",
            bottom: 0,
            opacity: 0.49,
          }} colors={[ 'rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 1)']} deg={180} />
          {/* <ImageBackground style={styles.header} source={require('../../pic/Minimal_Chair.png')} >
            <View style={{ flexDirection: 'row', justifyContent: "space-between" ,paddingHorizontal: 25,}}>
              <GoBackIcon style={{ flex: 1 }} onPress={() => navigation.navigate('HomePage')} />
              <Text style={styles.titleProduct}>Product</Text>
              <ShoppingCartsIcon style={{ flex: 1 }} />
            </View>
            <LinearGradient style={{
              height: "25%", width: "100%",
              position: "absolute",
              bottom: 0,
            }} colors={['transparent', '#171921',]}/>
          </ImageBackground> */}
        </View>
        <HeartLikeIcon style={styles.HeartLike} />

      </View>
      <View style={styles.checkoutBottom} >
        <View style={{ flexDirection: 'row', height: 20 }}>
          <Text style={styles.price}>{route.params.price}</Text>
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
        <View style={styles.AddCartIcon} >
          <Text style={{ color: '#fff' ,fontSize: 20}}>+  Add to Cart </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
