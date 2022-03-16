// import React, { useEffect, useState } from 'react';
// const [list,setlist]=useState([]);
import { ADD, DEL } from '../actions';
import *as ACTION from '../actions';
import { State } from 'react-native-gesture-handler';
export const Product = [
    {
        id: 0,
        title: 'Minimal Chair ',
        price: 235,
        dec: 'lorem Ipsum',
        pic: 'https://jusdialogus.com/wp-content/uploads/2019/09/p1.jpg',
    },
    {
        id: 1,
        title: 'Elegant White Chair',
        price: 124,
        dec: 'lorem Ipsum',
        pic: 'https://lh3.googleusercontent.com/2o4Zp9_zvsh_BIlNo2s3WwOb-zZrlhDNuC43SDaGRQp_fWBoRJPL27JWH3at40jk52IY=s85',

    },
    {
        id: 2,
        title: 'Vintage Chair',
        price: 89,
        dec: 'lorem Ipsum',
        pic: 'https://decosy.com/web/image/product.template/379/image',

    },
]
export const Carts = [
   
];

const initProduct = {
    numberCart: 0,
    Carts: [
    ],
    _products: [{
        id: 0,
        title: 'Minimal Chair 1',
        price: 235,
        dec: 'lorem Ipsum',
        pic: '../pic/Minimal_Chair.png',
        check: "false",
        quantity: 1,
    },
    {
        id: 1,
        title: 'Elegant White Chair',
        price: 124,
        dec: 'lorem Ipsum',
        pic: '../pic/Elegant_White_Chair.jpg',
        check: "false",
        quantity: 1,
    },
    {
        id: 2,
        title: 'Vintage Chair',
        price: 89,
        dec: 'lorem Ipsum',
        pic: 'r../pic/Vintage_Chair.jpg',
        check: "false",
        quantity: 1,
    },],
}
class product {
    constructor(id, title, price, dec, pic) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.dec = dec;
        this.pic = pic;
        this.check = "false";
        this.quantity = 1;
    }
}
const counterReducer = (state = initProduct, action) => {
    switch (action.type) {
        case "ADD_CART":
            const p = new product(action.id,action.title,action.price,action.dec,action.pic);
            return Carts.push(p)
        case 'GET_ALL_PRODUCT':
            return State._products;
        case 'GET_CART':
            return State.Carts;
        default:
            return state;
    }
}
export default counterReducer;