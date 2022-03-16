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
  StatusBar,
  Text,
  TextInput,
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
import LayoutBottomIcon from '../../icons/LayoutBottomIcon/LayoutBottomIcon'
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import *as counter from '../../redux/counter';
import { Keyboard } from 'react-native'

export default function App({ navigation, route }) {
  const DATA = [
    {
      id: 0,
      title: 'Minimal Chair ',
      price: 25,
      dec: 'lorem Ipsum',
      pic: require('../../pic/Minimal_Chair.png'),
    },
    {
      id: 1,
      title: 'Elegant White Chair',
      price: 25,
      dec: 'lorem Ipsum',
      pic: require('../../pic/Elegant_White_Chair.jpg'),
    },
    {
      id: 2,
      title: 'Vintage Chair',
      price: 25,
      dec: 'lorem Ipsum',
      pic: require('../../pic/Vintage_Chair.jpg'),
    },
  ];
  const Temp = counter.Product;

  const test = [{
    id: 0,
    title: 'Minimal Chair ',
    price: 235,
    dec: 'lorem Ipsum',
    pic: 'https://jusdialogus.com/wp-content/uploads/2019/09/p1.jpg',
  },]
  const [listitem, setlistitem] = useState([]);
  const [seach, setseach] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const handleSearch = (text) => {
    if (text) {
      const newData = listitem.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setseach(text);
    }
    else {
      Keyboard.dismiss();
      setFilteredDataSource(listitem);
      setseach(text);
    }
  };
  const ItemBottom = ({ title, dec, price, pic ,id}) => (
    <TouchableOpacity style={[styles.itemBottom, styles.ShadowItem]} onPress={() =>
      navigation.navigate('DetaiPage', {
        id: id,
        title: title,
        price: price,
        dec: dec,
        pic: pic,
      })} >
      <Image source={{ uri: pic }} style={styles.imageBottom} />
      <View style={{ flexDirection: 'column', marginLeft: 15, alignContent: 'center', flex: 2, marginRight: 5 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
          <GotoIcon style={{
            flex: 1, alignItems: "flex-end",
            bottom: 8,
          }} onPress={() => navigation.navigate('DetaiPage')} />
        </View>
      </View>
    </TouchableOpacity>
  );
  const ItemAbove = ({ title, dec, price, pic, item ,id}) => (
    <View style={{ overflow: 'hidden', }}>
      <TouchableOpacity style={[styles.itemAbove, styles.ShadowItem]} onPress={() =>
        navigation.navigate('DetaiPage', {
          id: id,
          title: title,
          price: price,
          dec: dec,
          pic: pic,
          item: item,
        })}>
        <ImageBackground source={{ uri: pic }} style={styles.imageAbove} >
          <View style={{
            flex: 1,
            top: 5,
            right: 5,
          }} >
            <HeartIcon />
          </View>

        </ImageBackground>
        <View style={{ marginBottom: 20, marginTop: 20, alignSelf: 'flex-start' }}>
          <Text style={styles.titleAbove}>{title}</Text>
          <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 15, color: '#2A2D3F', flex: 1 }}>${price.toFixed(2)}</Text>
          <AddIcon style={{ flex: 1, alignItems: "flex-end" }} />
        </View>
      </TouchableOpacity >
    </View>
  );

  const renderItem = ({ item }) => (
    <ItemBottom title={item.title} dec={item.dec} price={item.price} id={item.id} pic={item.pic} item={item} />
  );
  const renderItemAbove = ({ item }) => (
    <ItemAbove title={item.title} dec={item.dec} price={item.price} pic={item.pic}id={item.id} />
  );
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('list', JSON.stringify(value))
    } catch (e) {
      console.log(e);
    }
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('list')
      return value != null ? setlistitem(JSON.parse(value)) : []
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    storeData(Temp)
    getData()

  }, [])
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: '#f5f6fa', }}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <View style={[styles.headerIcon, styles.margin_layout]}>
          <MenuIcon style={{ flex: 1 }} />
          <UserIcon style={{ flex: 1 }} />
        </View>
        <View style={[{ flexDirection: "row" }, styles.margin_layout]}>
          <View style={[styles.searchView, styles.ShadowItem]}>
            <SeachIcon style={{ margin: 10 }} />
            <TextInput
              onChangeText={(text) => handleSearch(text)}
              style={styles.searchInput}
              placeholder="Seach" />
          </View>
          <ShoppingCartsIcon style={{ marginTop: 60 }} onPress={() => navigation.navigate('CartPage')} />
        </View>
        {
          seach === "" ?
            <View style={{ flex: 2 }}>
              <View style={[{ flex: 2.5 }]}>
                <Text style={[styles.titleItem, styles.margin_layout]}>Explore</Text>
                <FlatList
                  data={listitem}
                  renderItem={renderItemAbove}
                  keyExtractor={item => item.id}
                  numColumns={1}
                  horizontal={true}
                  scrollEnabled
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <View style={[styles.list_bottom]}>
                <Text style={[styles.titleItem]}>Best Selling</Text>
                <FlatList
                  data={test}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
            :
            <View style={[{ flex: 2, marginTop: 20 }, styles.margin_layout]}>
              <Text style={styles.titleItem}>Seach result</Text>
              <FlatList
                numColumns={1}
                style={{ marginTop: 20, flex: 1 }}
                data={filteredDataSource}
                renderItem={renderItem}
                keyExtractor={item => item.id}

              />
            </View>
        }
      </SafeAreaView>
    </View>
  );
}




