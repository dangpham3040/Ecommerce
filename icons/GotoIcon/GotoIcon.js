import React from "react";
import Circle from "react-native-svg";
import Svg, { Path, Rect } from 'react-native-svg'

export default function UserIcon({ color }) {
    return (
        <Svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Path d="M11.4 0.799988H4.5C2.3 0.799988 0.600006 2.50001 0.600006 4.70001V11.6C0.600006 13.8 2.3 15.5 4.5 15.5H11.4C13.6 15.5 15.3 13.8 15.3 11.6V4.70001C15.3 2.50001 13.5 0.799988 11.4 0.799988Z" fill="#2A2D3F" />
            <Path d="M8.60001 6L10.7 8.10001L8.60001 10.3" stroke="white" stroke-width="0.8587" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M10.7 8.10001H5.2" stroke="white" stroke-width="0.8587" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}