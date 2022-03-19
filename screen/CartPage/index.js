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
  Alert
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
import { connect } from 'react-redux'

const store = createStore(allReducter);

export default function App({ navigation }) {

  const [listitem, setlistitem] = useState([]);
  const [total, settotal] = useState(0);
  const [ship, setShip] = useState(30);
  const [totalMoney, settotalMoney] = useState(0);

  const dispatch = useDispatch();
  const list = useSelector(state => state.Carts);
  const count = useSelector(state => state.numberCart);
  const Temp = list;
  console.log("\n\n**************************");
  console.log("so luong : " + Temp.length);
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
              <View style={{ flexDirection: 'row' ,justifyContent: 'center'}}>
                <Text onPress={(() => handladd(id))}>+</Text>
                <Text style={{marginLeft:5,marginRight:5}}>{quantity}</Text>
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
  const handleCheck = (i) => {
    Temp.map((item, key) => {
      if (item.id == i) {
        if (Temp[key].check === "true") {
          Temp[key].check = "false";
        }
        else {
          Temp[key].check = "true";
        }
      }

    });
    storeData(Temp)
    getData()
    console.log("\n\n***************************")
    for (var c = 0; c < listitem.length; c++) {
      console.log("\ncheck[" + c + "] " + listitem[c].check);
    }
    handltotal()
  }
  const handladd = (i) => {
    Temp.map((item, key) => {
      if (item.id == i) {
        Temp[key].quantity++;
        storeData(Temp)
        getData()
      }
      if (Temp[i].check === "true") {
        handltotal()
      }
    });
  }
  const handldel = (i) => {
    Temp.map((item, key) => {
      if (item.id == i) {
        if (Temp[key].quantity > 1)
          Temp[key].quantity--;
        storeData(Temp)
        getData()
      }
      if (Temp[key].check === "true") {
        handltotal()
      }
    });

  }

  const handltotal = () => {
    var total = 0;
    if (Temp.length > 0) {
      for (var i = 0; i < Temp.length; i++) {
        if (Temp[i].check === "true") {
          total += Temp[i].price * Temp[i].quantity;
        }
      }
      settotal(total);
      settotalMoney(total + ship);
    }
  }
  const handlnotification = () => {
    Alert.alert(
      'confirm your purchase ',
      'Are you sure ?',
      [
        { text: 'Yes', onPress: () => console.log('Yes Pressed') },
        {
          text: ' No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel'
        },
      ],
      { cancelable: true }
    );
  };
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

  useEffect(() => {
    storeData(list)
    getData()
    handltotal()
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
          <View
            style={{ flexDirection: 'row' }}>
            <ShoppingCartsIcon style={{ marginTop: 10 }} onPress={() => navigation.navigate('CartPage')} />
            {
              Temp.length > 0 ? <View style={{ left: 27, position: 'absolute', top: 7, backgroundColor: '#e65c51', borderRadius: 50, height: 15, width: 15, alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>{Temp.length}</Text>
              </View> : null
            }
          </View>
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
          <Text style={{ color: "#2A2D3F", flex: 2 }}>Selected Items</Text>
          <Text style={{
            color: "#F26B6B", flex: 4,
            textAlign: 'right'
          }}>${total.toFixed(2)}</Text>
        </View>
        <View style={styles.bottomCheckout}>
          <Text style={{ color: "#2A2D3F", flex: 2 }}>Shipping Fee</Text>
          <Text style={{
            color: "#F26B6B", flex: 4,
            textAlign: 'right'
          }}>${ship.toFixed(3)}</Text>
        </View>

        <View style={styles.line} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 30, bottom: 150 }}>
          <Text style={{ color: "#2A2D3F", flex: 2, fontWeight: 'bold', fontSize: 20 }}>Subtotal</Text>
          <Text style={{
            color: "#F26B6B", flex: 3.5,
            fontWeight: '600',
            fontSize: 20,
            textAlign: 'right'
          }}>${totalMoney.toFixed(2)}</Text>

        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={styles.CheckOutButton}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontWeight: '500', fontSize: 20 }} onPress={() => {
              handlnotification()
            }} >Checkout</Text>
          </View>
        </View>

      </View>

    </SafeAreaView >
  );
}
