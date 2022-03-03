/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

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



import GotoIcon from '../../icons/GotoIcon/GotoIcon'
import MenuIcon from '../../icons/MenuIcon/MenuIcon'
import SeachIcon from '../../icons/SeachIcon/SeachIcon'
import ShoppingCartsIcon from '../../icons/ShoppingCartsIcon/ShoppingCartsIcon'
import UserIcon from '../../icons/UserIcon/UserIcon';
import AddIcon from '../../icons/AddIcon/AddIcon';
export default function App() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      price: '$25.00',
      dec: 'lorem Ipsum',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      price: '$25.00',
      dec: 'lorem Ipsum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      price: '$25.00',
      dec: 'lorem Ipsum',
    },
  ];
  const ItemBottom = ({ title, dec, price }) => (
    <View style={styles.itemBottom}>
      <Image style={{ backgroundColor: "#DDDDE8", height: 33, width: 33, marginRight: 15 }} />
      <View style={{ flexDirection: 'column', marginLeft: 15, alignContent: 'center', flex: 2 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>{price}</Text>
          <GotoIcon style={{ flex: 1, alignItems: "flex-end" }} />
        </View>

      </View>

    </View>);
  const ItemAbove = ({ title, dec, price }) => (
    <View style={styles.itemAbove}>
      <Image style={{ backgroundColor: "#DDDDE8", height: 120, width:120 }} />
      <Text style={styles.title,{justifyContent: 'flex-start'}}>{title}</Text>
      <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
      <View style={{ flexDirection: 'row' }}>
      <Text style={{fontSize: 8,color:'#2A2D3F',flex: 2}}>{price}</Text>
          <AddIcon style={{ flex: 1, alignItems: "flex-end" }} />
        </View>
    </View>);

  const renderItem = ({ item }) => (
    <ItemBottom title={item.title} dec={item.dec} price={item.price} />
  );
  const renderItemAbove = ({ item }) => (
    <ItemAbove title={item.title} dec={item.dec} price={item.price} />
  );
  return (

    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
        <MenuIcon style={{ flex: 1 }} />
        <UserIcon style={{ flex: 1 }} /></View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.searchView}>
          <SeachIcon style={{ margin: 10 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Seach" />

        </View>
        <ShoppingCartsIcon style={{ marginTop: 50 }} />
      </View>

      <Text style={{ fontSize: 20, marginTop: 15, marginBottom: 9, color: "#2A2D3F" }}>Explore</Text>
      <FlatList
        data={DATA}
        renderItem={renderItemAbove}
        keyExtractor={item => item.id}
        numColumns={1}
        horizontal={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
      />
      <Text style={{ fontSize: 20, marginTop: 15, marginBottom: 9, color: "#2A2D3F" }}>Best Selling</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  container: {
    backgroundColor: '#f5f6fa',
    flexDirection: 'column',
    marginLeft: 30,
    marginRight: 30,
    paddingHorizontal: 16,
  },
  title: {
    color: '#2A2D3F',
    alignContent: 'center',
    justifyContent: 'center',
  },
  searchView: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderRadius: 20,
    height: 40,
    flexDirection: "row",
    flex: 5,
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 20,
    justifyContent: 'center'
  },
  icon: {
    flex: 2,
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


  itemBottom: {
    justifyContent: 'space-between',
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemAbove: {
 
    borderRadius: 20,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 10,
    marginHorizontal: 5,
  },
  goto: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute'
  },
  searchIcon: {
    marginLeft: 15,
    marginRight: 15,
    height: "100%",
    width: "100%",
    alignItems: 'center',
    justifyContent: "flex-start"

  },
  price:
  {
    color: "#2A2D3F", fontSize: 7, flex: 2
  }
});



