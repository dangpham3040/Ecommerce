import React from "react";
import Circle from "react-native-svg";
import Svg, { Path, Rect } from 'react-native-svg'

export default function UserIcon({ color }) {
    return (
        <Svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M24 11.5H6.5C3.6 11.5 1.29999 9.2 1.29999 6.3C1.29999 3.4 3.6 1.10001 6.5 1.10001H24C26.9 1.10001 29.2 3.4 29.2 6.3C29.1 9.2 26.8 11.5 24 11.5Z" stroke="#DDDDE8" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>


    )
}