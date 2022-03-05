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
  TouchableOpacity,
  ImageBackground,


} from 'react-native';



import GotoIcon from '../../icons/GotoIcon/GotoIcon'
import MenuIcon from '../../icons/MenuIcon/MenuIcon'
import SeachIcon from '../../icons/SeachIcon/SeachIcon'
import ShoppingCartsIcon from '../../icons/ShoppingCartsIcon/ShoppingCartsIcon'
import UserIcon from '../../icons/UserIcon/UserIcon';
import AddIcon from '../../icons/AddIcon/AddIcon';
import HeartIcon from '../../icons/HeartIcon/HeartIcon'
import { styles } from './styles';
import { useState } from 'react/cjs/react.production.min';
export default function App({ navigation }) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      price: '$25.00',
      dec: 'lorem Ipsum',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      price: '$25.00',
      dec: 'lorem Ipsum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      price: '$25.00',
      dec: 'lorem Ipsum',
    },
  ];

  const ItemBottom = ({ title, dec, price }) => (
    <TouchableOpacity style={styles.itemBottom} onPress={() =>
      navigation.navigate('DetaiPage', {
        title: title,
        price: price,
        dec: dec,
      })} >
      <Image source={require('../../pic/Minimal_Chair.png')} style={styles.imageBottom} />
      <View style={{ flexDirection: 'column', marginLeft: 15, alignContent: 'center', flex: 2 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>{price}</Text>
          <GotoIcon style={{ flex: 1, alignItems: "flex-end" }} onPress={() => navigation.navigate('DetaiPage')} />
        </View>

      </View>

    </TouchableOpacity>);
  const ItemAbove = ({ title, dec, price }) => (
    <TouchableOpacity style={styles.itemAbove} onPress={() =>
      navigation.navigate('DetaiPage', {
        title: title,
        price: price,
        dec: dec,
      })

    }>
      <ImageBackground source={require('../../pic/Minimal_Chair.png')} style={styles.imageAbove} >
        <View style={{
          flex: 1,
          top: 5,
          marginRight: 15,
        }} >
          <HeartIcon />
        </View>

      </ImageBackground>
      <View style={{ flex: 2 }}>
        <Text style={styles.titleAbove}>{title}</Text>
        <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignContent: 'flex-end' }}>
        <Text style={{ fontSize: 15, color: '#2A2D3F', flex: 2 }}>{price}</Text>
        <AddIcon style={{ flex: 1, alignItems: "flex-end" }} />
      </View>
    </TouchableOpacity >
  );

  const renderItem = ({ item }) => (
    <ItemBottom title={item.title} dec={item.dec} price={item.price} id={item.id} />
  );
  const renderItemAbove = ({ item }) => (
    <ItemAbove title={item.title} dec={item.dec} price={item.price} />

  );
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f6fa', }}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <View style={styles.headerIcon}>
          <MenuIcon style={{ flex: 1 }} />
          <UserIcon style={{ flex: 1 }} /></View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.searchView}>
            <SeachIcon style={{ margin: 10 }} />
            <TextInput
              style={styles.searchInput}
              placeholder="Seach" />
          </View>
          <ShoppingCartsIcon style={{ marginTop: 45 }} onPress={() => navigation.navigate('CartPage')} />
        </View>

        <Text style={styles.titleItem}>Explore</Text>
        <FlatList
          data={DATA}
          renderItem={renderItemAbove}
          keyExtractor={item => item.id}
          numColumns={1}
          horizontal={true}
          scrollEnabled
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.titleItem}>Best Selling</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}





