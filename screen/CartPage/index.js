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
export default function App({ navigation }) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Minimal Chair',
      price: '25.00',

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Minimal Chair',
      price: '25.00',

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Minimal Chair',
      price: '25.00',

    },
  ];
  const [checked, setChecked] = useState(false);

  const Item = ({ title, dec, price }) => (
    <View style={styles.item}>
      {/* <CheckBox onPress={setChecked} /> */}
      <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-start' }}>
        <UnCheck />
        <Image source={require('../../pic/Minimal_Chair.png')} style={{ backgroundColor: "#DDDDE8", height: 65, width: 65, marginRight: 15 }} />
        <View style={{ flexDirection: 'column', marginLeft: 15, alignContent: 'center' }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
          <Text style={{ color: "#F26B6B", fontSize: 11 }}>{price}</Text>
        </View>

      </View>
    </View >);
  const renderItem = ({ item }) => (
    <Item title={item.title} price={item.price} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={{
        flex: 2,
        marginLeft: 10,
        marginRight: 10,
      }}>
        <View style={styles.header}>
          <GoBackIcon onPress={() => navigation.navigate('HomePage')} />
          <Text style={styles.title}>Cart</Text>
          <ShoppingCartsIcon/>
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
            <Text style={{ color: '#fff', fontWeight: 'bold', fontWeight: '500' }}>Checkout</Text>
          </View>
        </View>
      </View>

    </SafeAreaView >
  );
}
