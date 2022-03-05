import React from "react";
import Circle from "react-native-svg";
import Svg, { Path, Rect } from 'react-native-svg'

export default function UserIcon({ color }) {
    return (
        <Svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.7 14.3C11.6212 14.3 14.8 11.1212 14.8 7.20001C14.8 3.27879 11.6212 0.100006 7.7 0.100006C3.77878 0.100006 0.600006 3.27879 0.600006 7.20001C0.600006 11.1212 3.77878 14.3 7.7 14.3Z" fill="#2A2D3F" />
            <Path d="M7.7 5V9.29999" stroke="white" stroke-width="0.8143" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M9.89999 7.20001H5.60001" stroke="white" stroke-width="0.8143" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}