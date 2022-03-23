import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={49}
      height={46}
      viewBox="0 0 39 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.5 35.6c10.77 0 19.5-7.97 19.5-17.8C39 7.97 30.27 0 19.5 0S0 7.97 0 17.8c0 9.83 8.73 17.8 19.5 17.8z"
        fill="#fff"
      />
      <Path
        d="M26.151 13.312c-1.817-1.659-4.792-1.659-6.61 0-1.817-1.659-4.792-1.659-6.61 0-1.818 1.66-1.818 4.375 0 6.034l6.61 6.034 6.61-6.034c1.818-1.66 1.818-4.374 0-6.034z"
        fill="#F26B6B"
      />
    </Svg>
  )
}

export default SvgComponent
