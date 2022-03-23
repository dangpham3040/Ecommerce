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
import ShoppingCartsIcon from '../../icons/ShoppingCartsIcon/ShoppingCartsIcon'
import { styles } from './styles';
import UnCheck from '../../icons/UnCheck/UnCheck';
import CheckedIcon from '../../icons/CheckedIcon/CheckedIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import allReducter from '../../redux';
import { createStore } from 'redux';


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
  console.log("\n\n**************************");
  console.log("so luong : " + Temp.length);
  const Item = ({ title, price, pic, check, quantity, id }) => (
    <View style={[visible ? styles.item_dim : styles.item]}>
      <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center' }}>
        {
          check === "true" ? <CheckedIcon style={{ marginRight: 15 }} onPress={() => handleCheck(id)} /> : <UnCheck style={{ marginRight: 15 }} onPress={() => handleCheck(id)} />
        }
        <Image source={{ uri: pic }} style={{ flex: 1, height: 70, width: 70, marginRight: 15, borderRadius: 20 }} />
        <View style={{ flex: 2, flexDirection: 'column', marginLeft: 15, justifyContent: 'center' }}>
          <Text style={styles.title}>{title}</Text>
          <View style={{ flexDirection: 'row', alignContent: 'space-between', top: 15 }}>
            <Text style={{ flex: 1, color: "#F26B6B", fontSize: 15, fontWeight: '400' }}>${price.toFixed(2)}</Text>
            <View style={styles.add_del}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text onPress={(() => handladd(id))}>+</Text>
                <Text style={{ marginLeft: 5, marginRight: 5 }}>{quantity}</Text>
                <Text onPress={() => handldel(id)}>-</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View >);
  const ItemModal = ({ title, price, pic, check, quantity, id }) => (
    check === "true" ?
      <View style={styles.itemModal}>
        <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: pic }} style={{ flex: 1, height: 70, width: 70, borderRadius: 20 }} />
          <View style={{ flex: 2, flexDirection: 'column', marginLeft: 15, justifyContent: 'center' }}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ flexDirection: 'row', alignContent: 'space-between', top: 15 }}>
              <Text style={{ flex: 1, color: "#F26B6B", fontSize: 15, fontWeight: '400' }}>${price.toFixed(2)}</Text>
              <Text style={{ marginLeft: 5, marginRight: 5 }}>{quantity}</Text>
            </View>
          </View>
        </View>
      </View > : null);
  const Itemcheckout = ({ title, price, pic, check, quantity, id }) => (
    check === "true" ?
      <View style={[styles.itemModal]}>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={[styles.title, { textAlign: 'left', flex: 2 }]}>{title}</Text>
          <Text style={{ textAlign: 'center', flex: 2, color: "#F26B6B", fontSize: 15, fontWeight: '400', marginTop: 10 }}>${price.toFixed(2)}</Text>
          <Text style={{ flex: 1, marginLeft: 5, marginRight: 5, marginTop: 10, textAlign: 'right' }}>{quantity}</Text>
        </View>
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
  const handlnotification = (i) => {
    var id = "";
    var title = "";
    var price = "";
    var dec = "";
    var pic = "";
    var check = "";
    var quantity = "";

    list.map((item, key) => {
      if (item.id === i) {
        id = item.id;
        title = item.title;
        price = item.price;
        dec = item.dec;
        pic = item.pic;
        check = item.check;
        quantity = item.quantity;
      }
    });
    Alert.alert(
      "Please choose to continue",
      "are u sure u want to remove this",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () =>
            store.dispatch({
              type: 'REMOVE_CART',
              id: id + "",
              title: title,
              price: price,
              dec: dec,
              pic: pic,
              check: check,
              quantity: quantity,
            }
            )
        }
      ]
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
      return value != null ? setlistitem(JSON.parse(value)) & setNum(count) : null
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

    <SafeAreaView style={[styles.container, visible ? { backgroundColor: '#3c3c3c' } : null]}>
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
              num > 0 ? <View style={[visible ? styles.numberCart_dim : styles.numberCart]}>
                <Text style={[{ fontSize: 10, fontWeight: 'bold' }, visible ? { color: '#3c3c3c' } : { color: '#fff' }]}>{num}</Text>
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

      <View style={[styles.backgroundBottom, styles.Shadow, visible ? { backgroundColor: '#3c3c3c' } : null]} >
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
              total > 0 ? handlModal() : alert("Please choose to continue")
            }} >Checkout</Text>
          </View>
        </View>

      </View>
      <Modal
        style={{ borderRadius: 50 }}
        visible={visible}
        animationType='fade'
        onRequestClose={() => console.log('no warning')}
        transparent>
        <View style={{ flex: 1, margin: 30, borderRadius: 50 }}>
          <View style={{
            flexDirection: 'row', backgroundColor: '#f5f6fa'
          }}>
            <GoBackIcon style={{ marginLeft: 20, marginTop: 20, }} onPress={() => handlModal()} />
            <Text style={styles.titleCheckOut}>Check Out</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#f5f6fa' }}>
            <View style={{
              flex: 1,
              marginLeft: 25,
              marginRight: 25,
            }}>
              <FlatList
                style={{ flex: 4 }}
                nestedScrollEnabled
                data={listitem}
                renderItem={renderItemModal}
                keyExtractor={item => item.id}
              />
              <View
                style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 20 }} />
              <FlatList
                style={{ flex: 1 }}
                nestedScrollEnabled
                data={listitem}
                renderItem={renderItemcheckout}
                keyExtractor={item => item.id}
              />
              <View style={{ flex: 0.5 }}>
                <View style={styles.line}></View>
                <View style={[styles.bottomCheckout, { marginLeft: 25, marginRight: 25 }]}>
                  <Text style={{ color: "#2A2D3F", flex: 2 }}>Shipping Fee</Text>
                  <Text style={{
                    color: "#F26B6B", flex: 4,
                    textAlign: 'right'
                  }}>${ship.toFixed(3)}</Text>
                </View>
                <View style={[styles.bottomCheckout, { marginLeft: 25, marginRight: 25 }]}>
                  <Text style={{ color: "#2A2D3F", flex: 1, fontWeight: 'bold', fontSize: 20 }}>Total money</Text>
                  <Text style={{
                    color: "#F26B6B", flex: 1,
                    fontWeight: '600',
                    fontSize: 20,
                    textAlign: 'right'
                  }}>${totalMoney.toFixed(2)}</Text>
                </View>
              </View>

            </View>
            <TouchableOpacity style={styles.closeButton} onPress={handlModal}>
              <Text style={{ marginRight: 30, marginLeft: 30, color: '#fff', fontWeight: 'bold', fontWeight: '500', fontSize: 20 }} >Confirm </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView >
  );
}