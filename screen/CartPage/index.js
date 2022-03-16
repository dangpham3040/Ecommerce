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
  View,
  FlatList,
  Image,

} from 'react-native';
import GoBackIcon from '../../icons/GoBackIcon/GoBackIcon'
import ShoppingCartsIcon from '../../icons/ShoppingCartsIcon/ShoppingCartsIcon'
import { styles } from './styles';
import UnCheck from '../../icons/UnCheck/UnCheck';
import CheckedIcon from '../../icons/CheckedIcon/CheckedIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import allReducter from '../../redux';
import { createStore } from 'redux';
import *as ACTION from '../../actions';
import *as counter from '../../redux/counter';

const store = createStore(allReducter);

export default function App({ navigation }) {
  const DATA = [
    {
      id: 0,
      title: 'Minimal Chair ',
      price: 235,
      dec: 'lorem Ipsum',
      pic: require('../../pic/Minimal_Chair.png'),
      check: "false",
      quantity: 1,
    },
    {
      id: 1,
      title: 'Elegant White Chair',
      price: 124,
      dec: 'lorem Ipsum',
      pic: require('../../pic/Elegant_White_Chair.jpg'),
      check: "false",
      quantity: 1,
    },
    {
      id: 2,
      title: 'Vintage Chair',
      price: 89,
      dec: 'lorem Ipsum',
      pic: require('../../pic/Vintage_Chair.jpg'),
      check: "false",
      quantity: 1,
    },
  ];
  const Temp = counter.Carts;
  console.log("\n\n**************************");
  console.log("so luong : " + Temp.length);
  const [listitem, setlistitem] = useState([]);
  const [total, settotal] = useState(0);
  const [ship, setShip] = useState(30);
  const [totalMoney, settotalMoney] = useState(ship);
  const dispatch = useDispatch();
  const handleCheck = (i) => {
    var index;

    if (Temp[i].check === "true") {
      Temp[i].check = "false";
    }
    else {
      Temp[i].check = "true";
    }
    storeData(Temp)
    getData()
    console.log("\n\n***************************")
    for (var c = 0; c < listitem.length; c++) {
      console.log("\ncheck[" + c + "] " + listitem[c].check);
    }
    handltotal()
  }
  const handladd = (i) => {
    if (Temp[i].quantity > 0) {
      Temp[i].quantity = Temp[i].quantity + 1;
      storeData(Temp)
      getData()
      if (listitem[i].check === "true") {
        handltotal()
      }
    }

  }
  const handldel = (i) => {
    if (Temp[i].quantity > 0) {
      Temp[i].quantity = Temp[i].quantity - 1;
      storeData(Temp)
      getData()
      if (listitem[i].check === "true") {
        handltotal()
      }
    }
  }
  const Item = ({ title, price, pic, check, quantity, id }) => (
    <View style={styles.item}>
      <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
        {
          check === "true" ? <CheckedIcon style={{ marginRight: 15 }} onPress={() => handleCheck(id)} /> : <UnCheck style={{ marginRight: 15 }} onPress={() => handleCheck(id)} />
        }
        <Image source={{ uri: pic }} style={{ flex: 1, height: 70, width: 70, marginRight: 15, borderRadius: 20 }} />
        <View style={{ flex: 2, flexDirection: 'column', marginLeft: 15, justifyContent: 'center' }}>
          <Text style={styles.title}>{title}</Text>
          <View style={{ flexDirection: 'row', alignContent: 'space-between', top: 15 }}>
            <Text style={{ flex: 1, color: "#F26B6B", fontSize: 15, fontWeight: '400' }}>${price.toFixed(2)}</Text>
            <View style={styles.add_del}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text onPress={(() => handladd(id))}>+</Text>
                <Text >{quantity}</Text>
                <Text onPress={() => handldel(id)}>-</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View >);
  const renderItem = ({ item }) => (
    <Item title={item.title} price={item.price} pic={item.pic} id={item.id} check={item.check} quantity={item.quantity} />
  );
  const handltotal = () => {
    var total = 0;
    for (var i = 0; i < Temp.length; i++) {
      if (Temp[i].check === "true") {
        total += Temp[i].price * Temp[i].quantity;
      }
    }
    settotal(total);
    settotalMoney(total + ship);

  }
  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem('list', JSON.stringify(data))
    } catch (e) {
      console.log(e);
    }
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('list')
      return value != null ? setlistitem(JSON.parse(value)) : null
    } catch (e) {
      console.log(e);
    }
  }
  // const dispatch = useDispatch();
  // var temp = store.dispatch({type:'GET_ALL_PRODUCT',payload:[DATA]});

  useEffect(() => {
    storeData(Temp)
    getData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={{ flex: 2, }}>
        <View>
        </View>
        <View style={styles.header}>
          <GoBackIcon onPress={() => navigation.goBack()} />
          <Text style={styles._title}>Cart</Text>
          <ShoppingCartsIcon />
        </View>
        <FlatList
          nestedScrollEnabled
          data={listitem}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </View>

      <View style={[styles.backgroundBottom, styles.Shadow]} >
        <View style={styles.bottomCheckout}>
          <Text style={{ color: "#2A2D3F", flex: 4 }}>Selected Items</Text>
          <Text style={{
            color: "#F26B6B", flex: 1,
            alignSelf: 'flex-end',

          }}>${total.toFixed(2)}</Text>
        </View>
        <View style={styles.bottomCheckout}>
          <Text style={{ color: "#2A2D3F", flex: 4 }}>Shipping Fee</Text>
          <Text style={{
            color: "#F26B6B", flex: 1,
          }}>${ship.toFixed(3)}</Text>
        </View>

        <View style={styles.line} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 30, bottom: 150 }}>
          <Text style={{ color: "#2A2D3F", flex: 3.5, fontWeight: 'bold', fontSize: 20 }}>Subtotal</Text>
          <Text style={{
            color: "#F26B6B", flex: 1,
            fontWeight: '600',
            fontSize: 20,
          }}>${totalMoney.toFixed(2)}</Text>

        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={styles.CheckOutButton}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontWeight: '500', fontSize: 20 }} >Checkout</Text>
          </View>
        </View>
      </View>

    </SafeAreaView >
  );
}
