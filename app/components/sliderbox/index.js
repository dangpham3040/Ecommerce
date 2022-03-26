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

import { styles } from './styles';

import allReducter from '../../redux';
import { createStore } from 'redux';
import { SliderBox } from "react-native-image-slider-box"


const store = createStore(allReducter);

export default function App({ parentToChild }) {

    const images = [
        require('../../static/images/Minimal_Chair.jpg'),
        require('../../static/images/Elegant_White_Chair.jpg'),
        require('../../static/images/Vintage_Chair.jpg'),
        require('../../static/images/Minimal_Chair1.jpg'),
    ];

    return (
        <SliderBox
            style={styles.SliderBox}
            images={images}
            sliderBoxHeight={500}
            onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
            dotColor="#2A2D3F"
            inactiveDotColor="#90A4AE"
            dotStyle={styles.dot}
        />
    );
}