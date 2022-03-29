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
  Alert,
  Modal,
  TouchableOpacity
} from 'react-native';
import GoBackIcon from '../../icons/GoBackIcon/GoBackIcon'
import { styles } from './styles';
import UnCheck from '../../icons/UnCheck/UnCheck';
import CheckedIcon from '../../icons/CheckedIcon/CheckedIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import allReducter from '../../redux';
import { createStore } from 'redux';
import Header from '../../components/header';
import { s } from '../../utils/styles'


const store = createStore(allReducter);

export default function App({ navigation }) {

  const [listitem, setlistitem] = useState([]);
  const [total, settotal] = useState(0);
  const [ship, setShip] = useState(30);
  const [totalMoney, settotalMoney] = useState(0);
  const [visible, setvisible] = useState(false);
  const [num, setNum] = useState(0);

  const dispatch = useDispatch();
  const list = useSelector(state => state.Carts);
  const count = useSelector(state => state.numberCart);
  const Temp = list;
  const Item = ({ title, price, pic, check, quantity, id }) => (
    <View style={[visible ? styles.item_dim : styles.item]}>
        {
          check === "true" ? <CheckedIcon style={styles.check} onPress={() => handleCheck(id)} /> : <UnCheck style={styles.check} onPress={() => handleCheck(id)} />
        }
        <Image source={{ uri: pic }} style={styles.Image} />
        <View style={styles.view_item}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.item_body}>
            <Text style={styles.item_price}>${price.toFixed(2)}</Text>
            <View style={styles.add_del}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text onPress={(() => handladd(id))}>+</Text>
                <Text style={styles.item_quantity}>{quantity}</Text>
                <Text onPress={() => handldel(id)}>-</Text>
              </View>
            </View>
          </View>
 
      </View>
    </View >);
  const ItemModal = ({ title, price, pic, check, quantity, id }) => (
    check === "true" ?
      <View style={styles.itemModal}>
          <Image source={{ uri: pic }} style={styles.Image} />
          <View style={styles.view_item}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.item_body}>
              <Text style={styles.item_price}>${price.toFixed(2)}</Text>
              <Text style={styles.item_quantity}>{quantity}</Text>
            </View>
        </View>
      </View > : null);
  const Itemcheckout = ({ title, price, pic, check, quantity, id }) => (
    check === "true" ?
      <View style={[styles.itemModal]}>
        <Text style={[styles.title, { textAlign: 'left', flex: 2 }]}>{title}</Text>
        <Text style={[styles.item_price,{marginTop:10}]}>${price.toFixed(2)}</Text>
        <Text style={styles.checkout_quantity}>{quantity}</Text>
      </View > : null);
  const renderItem = ({ item }) => (
    <Item title={item.title} price={item.price} pic={item.pic} id={item.id} check={item.check} quantity={item.quantity} />
  );
  const renderItemModal = ({ item }) => (
    <ItemModal title={item.title} price={item.price} pic={item.pic} id={item.id} check={item.check} quantity={item.quantity} />
  );
  const renderItemcheckout = ({ item }) => (
    <Itemcheckout title={item.title} price={item.price} pic={item.pic} id={item.id} check={item.check} quantity={item.quantity} />
  );
  const handlModal = () => {
    if (visible) {
      setvisible(false);
    }
    else {
      setvisible(true);
    }
  }
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
      if (Temp[key].check === "true") {
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
  const setname = () => {
    store.dispatch({
      type: 'SET_name',
      name: 'Cart',
    })
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
      return value != null ? setlistitem(JSON.parse(value)) & setNum(count) : null
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    storeData(list)
    getData()
    handltotal()
    setname()
  }, [])

  return (

    <SafeAreaView style={[styles.container, visible ? styles.blur : null]}>
      <StatusBar hidden />
      <View style={styles.top}>
        <Header />
        <FlatList
          nestedScrollEnabled
          data={listitem}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={[styles.backgroundBottom, styles.Shadow, visible ? styles.blur : null]} >
        <View style={styles.bottomCheckout}>
          <Text style={styles.title_mony}>Selected Items</Text>
          <Text style={styles.total}>${total.toFixed(2)}</Text>
        </View>
        <View style={styles.bottomCheckout}>
          <Text style={styles.title_mony}>Shipping Fee</Text>
          <Text style={styles.ship}>${ship.toFixed(3)}</Text>
        </View>

        <View style={styles.line} />
        <View style={styles.view_Subtotal}>
          <Text style={styles.Subtotal}>Subtotal</Text>
          <Text style={styles.totalMoney}>${totalMoney.toFixed(2)}</Text>

        </View>
        <View style={styles.view_checkout}>

          <TouchableOpacity
            style={styles.CheckOutButton} onPress={() => {
              total > 0 ? handlModal() : alert("Please choose to continue")
            }}>
            <Text style={styles.title_checkout}  >Checkout</Text>
          </TouchableOpacity>
        </View>

      </View>
      <Modal
        visible={visible}
        animationType='fade'
        onRequestClose={() => console.log('no warning')}
        transparent>
        <View style={styles.modal_view}>
          <View style={styles.modal_header}>
            <GoBackIcon style={styles.modal_goback} onPress={() => handlModal()} />
            <Text style={styles.titleCheckOut}>Check Out</Text>
          </View>
          <View style={styles.modal_body}>
            <View style={styles.flatList_top}>
              <FlatList
                nestedScrollEnabled
                data={listitem}
                renderItem={renderItemModal}
                keyExtractor={item => item.id}
              />
              <View
                style={styles.flatList_bottom} />
              <FlatList
                nestedScrollEnabled
                data={listitem}
                renderItem={renderItemcheckout}
                keyExtractor={item => item.id}
              />
              <View style={{ flex: 0.5 }}>
                <View style={styles.line}></View>
                <View style={[styles.bottomCheckout]}>
                  <Text style={styles.Shipping_Fee}>Shipping Fee</Text>
                  <Text style={styles.ship}>${ship.toFixed(3)}</Text>
                </View>
                <View style={[styles.bottomCheckout]}>
                  <Text style={styles.modal_title}>Total money</Text>
                  <Text style={styles.modal_totalmoney}>${totalMoney.toFixed(2)}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={handlModal}>
              <Text style={styles.Confirm} >Confirm </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView >
  );
}