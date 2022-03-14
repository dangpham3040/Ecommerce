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
  const test = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Minimal Chair ',
    price: '$25.00',
    dec: 'lorem Ipsum',
    pic: require('../../pic/Minimal_Chair.png'),
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
    } else {
      setFilteredDataSource(listitem);
      setseach(text);
    }
  };
  const ItemBottom = ({ title, dec, price, pic }) => (
    <TouchableOpacity style={[styles.itemBottom, styles.ShadowItem]} onPress={() =>
      navigation.navigate('DetaiPage', {
        title: title,
        price: price,
        dec: dec,
        pic: pic,
      })} >
      <Image source={pic} style={styles.imageBottom} />
      <View style={{ flexDirection: 'column', marginLeft: 15, alignContent: 'center', flex: 2, marginRight: 5}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
        <View style={{ flexDirection: 'row' ,justifyContent: 'space-between',}}>
          <Text style={styles.price}>{price}</Text>
          <GotoIcon style={{
            flex: 1, alignItems: "flex-end",
            bottom: 8,
          }} onPress={() => navigation.navigate('DetaiPage')} />
        </View>
      </View>
    </TouchableOpacity>
  );
  const ItemAbove = ({ title, dec, price, pic }) => (
    <View style={{ overflow: 'hidden', }}>
      <TouchableOpacity style={[styles.itemAbove, styles.ShadowItem]} onPress={() =>
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
          <Text style={{ fontSize: 15, color: '#2A2D3F', flex: 1 }}>{price}</Text>
          <AddIcon style={{ flex: 1, alignItems: "flex-end" }} />
        </View>
      </TouchableOpacity >
    </View>
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
    <View style={{ height:'100%',width:'100%', backgroundColor: '#f5f6fa', }}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <View style={[styles.headerIcon, styles.margin_layout]}>
          <MenuIcon style={{ flex: 1 }} />
          <UserIcon style={{ flex: 1 }} />
        </View>
        <View style={[{ flexDirection: "row" }, styles.margin_layout]}>
          <View style={[styles.searchView,styles.ShadowItem]}>
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
              <View style={[{ flex: 2.5}]}>
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
            <View style={[{ flex: 2, marginTop: 20 },styles.margin_layout]}>
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





