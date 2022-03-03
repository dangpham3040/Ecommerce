import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25.7 32.5H7.5c-3.8 0-7-3.1-7-7V7.3c0-3.8 3.1-7 7-7h18.2c3.8 0 7 3.1 7 7v18.2c0 3.9-3.1 7-7 7z"
        fill="#DDDDE8"
      />
    </Svg>
  )
}

export default SvgComponent
