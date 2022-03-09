/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';


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
import CheckBox from 'react-native-check-box'
import { styles } from './styles';
import UnCheck from '../../icons/UnCheck/UnCheck';
import CheckOutButtonIcon from '../../icons/CheckOutButtonIcon/CheckOutButtonIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { JumpingTransition } from 'react-native-reanimated';
import CheckedIcon from '../../icons/CheckedIcon/CheckedIcon';
import MenuIcon from '../../icons/MenuIcon/MenuIcon';
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

  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    if (checked === true) {
      setChecked(false);
    }
    else {
      setChecked(true);
    }

  }
  const [num, setnum] = useState(1);
  const handladd = () => {
    setnum(num + 1);
  }
  const handldel = () => {
    setnum(num - 1);
  }
  const Item = ({ title, dec, price, pic }) => (
    <View style={styles.item}>
      {/* <CheckBox onPress={setChecked} /> */}

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
        <View style={{
          position: 'absolute',
          backgroundColor: '#fff',
          width: '15%',
          height: '25%',
          borderRadius: 50,
          borderColor: '#DDDDE8',
          right: 15,
        }}>
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
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </View>
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingHorizontal: 30,
        paddingVertical: 30
      }} >
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
