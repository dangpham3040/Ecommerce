// import React, { useEffect, useState } from 'react';
// const [list,setlist]=useState([]);
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'DEL':
            return state - 1;
        default:
            return state;
    }
}
export default counterReducer;