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

} from 'react-native';
import GoBackIcon from '../../icons/GoBackIcon/GoBackIcon'
import ShoppingCartsIcon from '../../icons/ShoppingCartsIcon/ShoppingCartsIcon'
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import allReducter from '../../redux';
import { createStore } from 'redux';
import { useNavigation } from '@react-navigation/native';


const store = createStore(allReducter);

export default function App({ parentToChild }) {

    const [listitem, setlistitem] = useState([]);
    const [visible, setvisible] = useState(false);
    const [num, setNum] = useState(0);

    const dispatch = useDispatch();
    const list = useSelector(state => state.Carts);
    const count = useSelector(state => state.numberCart);
    const name = useSelector(state => state.name);
    const Temp = list;
    console.log("\n\n**************************");
    console.log("so luong : " + parentToChild);
    const numbercart =parentToChild>0?parentToChild:num;
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
    const navigation = useNavigation();
    useEffect(() => {
        storeData(list)
        getData()
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Refreshed: ' + Temp.length);
            setNum(Temp.length)
        });
        return unsubscribe;
    }, [])
    return (

        <View style={styles.header}>
            <GoBackIcon onPress={() => navigation.goBack()} />
            <Text style={styles._title}>{name}</Text>
            <View
                style={{ flexDirection: 'row' }}>
                <ShoppingCartsIcon onPress={() => navigation.navigate('CartPage')} />
                {
                    numbercart > 0 ? <View style={[visible ? styles.numberCart_dim : styles.numberCart]}>
                        <Text style={[{ fontSize: 10, fontWeight: 'bold', color: '#fff' }]}>{numbercart}</Text>
                    </View> : null
                }
            </View>
        </View>
    );
}