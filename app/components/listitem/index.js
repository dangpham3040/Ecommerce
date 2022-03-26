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
    TouchableOpacity,
    Image

} from 'react-native';

import { styles } from './styles';
import GotoIcon from '../../icons/GotoIcon/GotoIcon'


export default function App({ list }) {
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const ItemBottom = ({ title, dec, price, pic, id }) => (
        <TouchableOpacity style={[styles.itemBottom, styles.ShadowItem]} onPress={() =>
            navigation.navigate('DetaiPage', {
                id: id,
                title: title,
                price: price,
                dec: dec,
                pic: pic,
            })} >
            <Image source={{ uri: pic }} style={styles.imageBottom} />
            <View style={{ flexDirection: 'column', marginLeft: 15, alignContent: 'center', flex: 2, marginRight: 5 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={{ color: "#B8B8CD" }}>{dec}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={styles.price}>${price.toFixed(2)}</Text>
                    <GotoIcon style={{
                        flex: 1, alignItems: "flex-end",
                        bottom: 8,
                    }} onPress={() => navigation.navigate('DetaiPage')} />
                </View>
            </View>
        </TouchableOpacity>
    );
    const renderItemBottom = ({ item }) => (
        <ItemBottom title={item.title} dec={item.dec} price={item.price} id={item.id} pic={item.pic} item={item} />
    );
    useEffect(() => {
        setFilteredDataSource(list)
   
    }, [])
    return (
        <FlatList
            numColumns={1}
            style={{ marginTop: 20, flex: 1 }}
            data={filteredDataSource}
            renderItem={renderItemBottom}
            keyExtractor={item => item.id}
        />
    );
}