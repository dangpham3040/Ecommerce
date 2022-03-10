import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={185}
      height={76}
      viewBox="0 0 185 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.49}
        d="M184.2.6H.6v75.2h183.6V.6z"
        fill="url(#paint0_linear_1_190)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_190"
          x1={92.3806}
          y1={14}
          x2={92.3806}
          y2={70.2297}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
