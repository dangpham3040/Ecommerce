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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  FlatList,
  Image,


} from 'react-native';
import GoBackIcon from '../../icons/GoBackIcon/GoBackIcon'
import ShoppingCartsIcon from '../../icons/ShoppingCartsIcon/ShoppingCartsIcon'
import CheckBox from 'react-native-check-box'
import { styles } from './styles';

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
    {
      id: '1',
      title: 'Minimal Chair',
      price: '25.00',
    },
    {
      id: '2',
      title: 'Minimal Chair',
      price: '25.00',

    },
    {
      id: '3',
      title: 'Minimal Chair',
      price: '25.00',

    },
    {
      id: '4',
      title: 'Minimal Chairm',
      price: '25.00',

    },

  ];
  const [checked, setChecked] = useState(false);

  const Item = ({ title, dec, price }) => (
    <View style={styles.item}>
      <CheckBox
        style={{ flex: 0.5, marginBottom: 5, marginTop: 5 }}
        status={checked ? 'checked' : 'unchecked'}
        onClick={() => {
          setChecked(!checked);

        }}
        checked={true}
      />
      <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-start' }}>
        <Image source={require('../../pic/Minimal_Chair.png')} style={{ backgroundColor: "#DDDDE8", height: 33, width: 33, marginRight: 15 }} />
        <View style={{ flexDirection: 'column', marginLeft: 15, alignContent: 'center' }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
          <Text style={{ color: "#2A2D3F", fontSize: 7 }}>{price}</Text>
        </View>
      </View>
    </View>);
  const renderItem = ({ item }) => (
    <Item title={item.title} price={item.price} />
  );
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <GoBackIcon onPress={() => navigation.navigate('HomePage')} />
        <Text style={styles.title}>Cart</Text>
        <ShoppingCartsIcon />
      </View>
      <ScrollView horizontal={false}>
        <ScrollView  horizontal={false} style={{flex:1}}>
          <FlatList
            nestedScrollEnabled
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </ScrollView>

      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
      }} />
    </SafeAreaView >
  );
}
