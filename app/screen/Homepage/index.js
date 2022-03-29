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
import { Keyboard } from 'react-native'
import allReducter from '../../redux';
import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import Iten_list from '../../components/listitem';



const store = createStore(allReducter);
export default function App({ navigation, route }) {
  const test = [{
    id: 0,
    title: 'Minimal Chair ',
    price: 235,
    dec: 'lorem Ipsum',
    pic: 'https://jusdialogus.com/wp-content/uploads/2019/09/p1.jpg',
  },]
  const [num, setNum] = useState(0);
  const [listitem, setlistitem] = useState([]);
  const [seach, setseach] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const dispatch = useDispatch();
  const list = useSelector(state => state._products);

  const list_cart = useSelector(state => state.Carts);
  const Temp = list;
  const renderItemAbove = ({ item }) => (
    <ItemAbove title={item.title} dec={item.dec} price={item.price} pic={item.pic} id={item.id} />
  );
  const ItemAbove = ({ title, dec, price, pic, item, id }) => (
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
          <View style={styles.Heart} >
            <HeartIcon />
          </View>

        </ImageBackground>
        <View style={styles.item_body}>
          <Text style={styles.titleAbove}>{title}</Text>
          <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
          <TouchableOpacity onPress={() => store.dispatch({
            type: 'ADD_CART',
            id: id,
            title: title,
            price: price,
            dec: dec,
            pic: pic,
          }) & handladd()}>
            <AddIcon style={styles.addicon}></AddIcon>
          </TouchableOpacity>

        </View>
      </TouchableOpacity >
    </View>
  );
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
  const handladd = (c) => {
    for (var i = 0; i < list_cart.length; i++) {
      if (list_cart[i].id === c) {
        return console.log('ton tai')
      }
    }
    return setNum(num + 1);
  }
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
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Refreshed: ' + list_cart.length);
      setNum(list_cart.length)
    });
    return unsubscribe;

  }, [])

  return (

      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <View style={[styles.headerIcon, styles.margin_layout]}>
          <MenuIcon style={{ flex: 1 }} />
          <UserIcon style={{ flex: 1 }} />
        </View>
        <View style={styles.view_top}>
          <View style={[styles.searchView, styles.ShadowItem]}>
            <SeachIcon style={{ margin: 10 }} />
            <TextInput
              onChangeText={(text) => handleSearch(text)}
              style={styles.searchInput}
              placeholder="Seach" />
          </View>
          <View style={styles.shop_cart}>
            <ShoppingCartsIcon style={{ marginTop: 10 }} onPress={() => navigation.navigate('CartPage')} />
            {
              list_cart.length > 0 ? <View style={styles.numberCart}>
                <Text style={styles.title_num}>{list_cart.length}</Text>
              </View> : null
            }

          </View>
        </View>
        {
          seach === "" ?
            <View style={{ flex: 2 }}>
              <View style={[{ flex: 2.5 }]}>
                <Text style={[styles.titleItem,styles.margin_layout]}>Explore</Text>
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
                <Iten_list list={ test } />
              </View>
            </View>
            :
            <View style={[{ flex: 2, marginTop: 20 }]}>
              <Text style={styles.titleItem}>Seach result</Text>
              <Iten_list list={ filteredDataSource } />
            </View>
        }
      </SafeAreaView>
   
  );
}







