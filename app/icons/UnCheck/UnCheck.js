import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.1 7H1.5c-.6 0-1-.5-1-1V1.4c0-.6.5-1 1-1h4.6c.6 0 1 .5 1 1V6c.1.5-.4 1-1 1z"
        stroke="#2A2D3F"
        strokeWidth={0.75}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

export default SvgComponent
