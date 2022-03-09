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

export default function App({ navigation }) {
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
  const [list_choose, setlist] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    if (checked === true) {
      setChecked(false);
    }
    else {
      setChecked(true);
    }
    alert("Số lượng đã chọn "+list_choose.length);
  }

  const [num, setnum] = useState(1);
  const handladdtochoose = (value) => {
    list_choose.push(value);
  }
  const handlremovechoose = (value) => {
    list_choose.slice(value,1);
  }
  const handladd = () => {
    setnum(num + 1);
  }
  const handldel = () => {
    if (num > 0) {
      setnum(num - 1);
    }
  }
  const Item = ({ title, dec, price, pic }) => (
    <View style={styles.item}>
      <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
        {
          checked ? <CheckedIcon style={{ marginRight: 15 }} onPress={handleCheck} /> : <UnCheck style={{ marginRight: 15 }} onPress={handleCheck} />
        }
        <Image source={pic} style={{ backgroundColor: "#DDDDE8", height: 65, width: 65, marginRight: 15 }} />
        <View style={{ flexDirection: 'column', marginLeft: 15, alignContent: 'center' }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
          <Text style={{ color: "#F26B6B", fontSize: 15, fontWeight: '400' }}>{price}</Text>
        </View>
        <View style={styles.add_del}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text onPress={handladd}>+</Text>
            <Text >{num}</Text>
            <Text onPress={handldel}>-</Text>
          </View>
        </View>
      </View>
    </View >);
  const renderItem = ({ item }) => (
    <Item title={item.title} price={item.price} pic={item.pic} />
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
      return value != null ? setlistitem(JSON.parse(value)) : null

    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    storeData()
    getData()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={{
        flex: 2,
        marginLeft: 10,
        marginRight: 10,
      }}>
        <View>

        </View>
        <View style={styles.header}>
          <GoBackIcon onPress={() => navigation.navigate('HomePage')} />
          <Text style={styles.title}>Cart</Text>
          <ShoppingCartsIcon />
        </View>
        <FlatList
          nestedScrollEnabled
          data={listitem}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </View>
      <View style={styles.backgroundBottom} >
        <View style={styles.bottomCheckout}>
          <Text style={{ color: "#2A2D3F", flex: 4 }}>Selected Items</Text>
          <Text style={{
            color: "#F26B6B", flex: 1,
          }}>$235.00</Text>
        </View>
        <View style={styles.bottomCheckout}>
          <Text style={{ color: "#2A2D3F", flex: 4 }}>Shipping Fee</Text>
          <Text style={{
            color: "#F26B6B", flex: 1,
          }}>$30.00</Text>
        </View>

        <View style={styles.line} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 40, bottom: 150 }}>
          <Text style={{ color: "#2A2D3F", flex: 3.5, fontWeight: 'bold', fontSize: 20 }}>Subtotal</Text>
          <Text style={{
            color: "#F26B6B", flex: 1.5,
            fontWeight: '600',
            fontSize: 20
          }}>$265.00</Text>

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
