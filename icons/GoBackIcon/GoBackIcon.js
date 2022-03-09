import React from "react";
import Circle from "react-native-svg";
import Svg, { Path, Rect } from 'react-native-svg'

export default function UserIcon({ color }) {
    return (
        <Svg width="31" height="29" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M4.79999 1.10001L1.40002 4.50001L4.79999 8.00001" stroke="#2A2D3F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M1.40002 4.50001H10.4" stroke="#2A2D3F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}