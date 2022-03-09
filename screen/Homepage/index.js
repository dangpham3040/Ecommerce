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
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation, route }) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Minimal Chair ',
      price: '$25.00',
      dec: 'lorem Ipsum',
      pic: require('../../pic/Minimal_Chair.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Elegant White Chair',
      price: '$25.00',
      dec: 'lorem Ipsum',
      pic: require('../../pic/Elegant_White_Chair.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Vintage Chair',
      price: '$25.00',
      dec: 'lorem Ipsum',
      pic: require('../../pic/Vintage_Chair.jpg'),
    },
  ];
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
    } else {
      setFilteredDataSource(listitem);
      setseach(text);
    }
  };
  const ItemBottom = ({ title, dec, price, pic }) => (
    <TouchableOpacity style={styles.itemBottom} onPress={() =>
      navigation.navigate('DetaiPage', {
        title: title,
        price: price,
        dec: dec,
        pic: pic,
      })} >
      <Image source={pic} style={styles.imageBottom} />
      <View style={{ flexDirection: 'column', marginLeft: 15, alignContent: 'center', flex: 2 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>{price}</Text>
          <GotoIcon style={{ flex: 1, alignItems: "flex-end" }} onPress={() => navigation.navigate('DetaiPage')} />
        </View>
      </View>
    </TouchableOpacity>
  );
  const ItemAbove = ({ title, dec, price, pic }) => (
    <TouchableOpacity style={styles.itemAbove} onPress={() =>
      navigation.navigate('DetaiPage', {
        title: title,
        price: price,
        dec: dec,
        pic: pic,
      })}>
      <ImageBackground source={pic} style={styles.imageAbove} >
        <View style={{
          flex: 1,
          top: 5,
          marginRight: 5,
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
    <ItemBottom title={item.title} dec={item.dec} price={item.price} id={item.id} pic={item.pic} />
  );
  const renderItemAbove = ({ item }) => (
    <ItemAbove title={item.title} dec={item.dec} price={item.price} pic={item.pic} />
  );
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('list', JSON.stringify(DATA))
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
    storeData()
    getData()
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f6fa', }}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <View style={styles.headerIcon}>
          <MenuIcon style={{ flex: 1 }} />
          <UserIcon style={{ flex: 1 }} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.searchView}>
            <SeachIcon style={{ margin: 10 }} />
            <TextInput
              onChangeText={(text) => handleSearch(text)}
              style={styles.searchInput}
              placeholder="Seach" />
          </View>
          <ShoppingCartsIcon style={{ marginTop: 45 }} onPress={() => navigation.navigate('CartPage')} />
        </View>
        {
          seach === "" ?
            <View style={{ flex: 2 }}>
              <Text style={styles.titleItem}>Explore</Text>
              <FlatList
                style={{ flex: 1 }}
                data={listitem}
                renderItem={renderItemAbove}
                keyExtractor={item => item.id}
                numColumns={1}
                horizontal={true}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
              />
              <Text style={styles.titleItem}>Best Selling</Text>
              <FlatList
                style={{ flex: 1 }}
                data={listitem}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
            :
            <View style={{ marginTop: 20 }}>
              <Text style={styles.title}>Seach result</Text>
              <FlatList
                numColumns={1}
                style={{ marginTop: 20 }}
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





