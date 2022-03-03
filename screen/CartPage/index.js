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


export default function App() {
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
        <Image source={{ uri: imageURI }} style={{ backgroundColor: "#DDDDE8", height: 33, width: 33, marginRight: 15 }} />
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
  var imageURI = "https://designmap.gr/wp-content/uploads/2018/03/chair.png";

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.header,{justifyContent: 'space-between'}}>
        <GoBackIcon style={{flex:1}}/>
        <Text style={{ color: "#2A2D3F", fontSize: 25, justifyContent: 'center', alignItems: 'center' }}>Cart</Text>
        <ShoppingCartsIcon style={{flex:1}} />
      </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
 

      <View style={{ backgroundColor: "#F5F6FA", borderRadius: 20, height: 150 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  container: {
    backgroundColor: '#f5f6fa',
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 16,
  },
  title: {
    color: "#2A2D3F",
    alignContent: 'center',
    justifyContent: 'center',
  },
  searchView: {
    height: 40,
    flexDirection: "column",
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 5
  },
  icon: {
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  searchInput: {
    flex: 8,
    fontSize: 12,
    paddingBottom: 0,
    paddingTop: 0
  },
  searchItem: {
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottomWidth: 1
  },
  searchTextItem: {

    fontSize: 14,

    marginVertical: 10
  },
  component: {
    marginTop: 24
  },


  contentWantToEarn: {
    flex: 1,
    padding: 30,
  },
  textWantToEarn: {

    fontSize: 14,

    alignItems: "center"
  },
  readMoreButton: {
    alignItems: "baseline"
  },
  readMore: {

    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 15,
    fontSize: 10,
  },

  item: {

    flex: 1,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});



