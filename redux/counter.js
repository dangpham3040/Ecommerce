// import React, { useEffect, useState } from 'react';
// const [list,setlist]=useState([]);

import { Value } from "react-native-reanimated";

// class products {
//     constructor(id, title, price, dec, pic) {
//         this.id = id;
//         this.title = title;
//         this.price = price;
//         this.dec = dec;
//         this.pic = pic;
//         this.check = "false";
//         this.action = 1;
//     }
// }
// const list = [];
// var amount = 0;
var value = 0;
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            value = state + 1;
            alert(value);
            return value;
        case 'DEL':
            value = state - 1;
            alert(value);
            return value;

        case 'getProduct':
            return state;

        default:
            return state;
    }
}
export default counterReducer;