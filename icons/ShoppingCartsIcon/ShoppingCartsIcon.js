import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={34}
      height={33}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.4 9H4.7L3.5 4.2h8.1L10.4 9zM3.5 4.2l-.6-2.1H.7"
        stroke="#2A2D3F"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 2.7C14 1.4 12.9.3 11.6.3c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1 2.4-2.4z"
        fill="#E65C51"
      />
      <Path
        d="M5.7 11.9c0-.5-.4-.8-.8-.8s-.8.4-.8.8c0 .5.4.8.8.8s.8-.3.8-.8zM11.1 11.9c0-.5-.4-.8-.8-.8-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.3.8-.8z"
        fill="#2A2D3F"
      />
    </Svg>
  )
}

export default SvgComponent
