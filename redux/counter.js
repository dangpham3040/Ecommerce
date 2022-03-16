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
    Carts: [],
    _products: [{
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

    },]
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
function cartExists(id) {
    return Carts.some(function (el) {
        return el.id === id;
    });
}
export const counterReducer = (state = initProduct, action) => {
    const p = new product(action.id, action.title, action.price, action.dec, action.pic);
    switch (action.type) {
        case "ADD_CART":
            if (cartExists(p.id)) {
                console.log('Đã có trong giỏ hàng')
            }
            else {
                return Carts.push(p);
            }

        case 'ADD_quantity':
            return Carts[p.id].quantity = 11;
        case 'DEC_quantity':
            return Carts[p.id].quantity = 1;
        default:
            return state;
    }
}
export default counterReducer;