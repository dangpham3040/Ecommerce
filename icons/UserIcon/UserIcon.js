import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M13 17.1H4.5C2.1 17.1 0.199997 15.2 0.199997 12.8V4.3C0.199997 1.9 2.1 0 4.5 0H13C15.4 0 17.3 1.9 17.3 4.3V12.8C17.3 15.2 15.4 17.1 13 17.1Z" fill="#2A2D3F" />
            <Path d="M10.2 6.60001C10.2 7.40001 9.5 8.10001 8.7 8.10001C7.9 8.10001 7.2 7.40001 7.2 6.60001C7.2 5.80001 7.9 5.10001 8.7 5.10001C9.5 5.10001 10.2 5.80001 10.2 6.60001Z" fill="white" />
            <Path d="M8.69999 8.90001C7.39999 8.90001 6.3 9.70001 5.8 10.9C5.6 11.4 6 12 6.6 12H10.8C11.4 12 11.8 11.4 11.6 10.9C11.2 9.70001 9.99999 8.90001 8.69999 8.90001Z" fill="white" />
        </Svg>


    )
}

export default SvgComponent
