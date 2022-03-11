import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={92}
      height={141}
      viewBox="0 0 92 141"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M79.2 140.8H12.5c-6.6 0-12-5.4-12-12V12.7c0-6.6 5.4-12 12-12h66.7c6.6 0 12 5.4 12 12v116.1c0 6.6-5.3 12-12 12z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
