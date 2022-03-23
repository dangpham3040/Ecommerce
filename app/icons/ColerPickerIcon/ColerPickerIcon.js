import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={82}
      height={63}
      viewBox="0 0 42 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.405 5.287c0-.408.094-.774.282-1.098.192-.324.45-.576.774-.756a2.158 2.158 0 011.074-.276c.444 0 .838.11 1.182.33.348.216.6.524.756.924h-.822a1.102 1.102 0 00-.45-.492 1.335 1.335 0 00-.666-.162c-.276 0-.522.062-.738.186a1.314 1.314 0 00-.51.534 1.74 1.74 0 00-.18.81c0 .308.06.578.18.81.124.232.294.412.51.54.216.124.462.186.738.186.252 0 .474-.054.666-.162.192-.108.342-.272.45-.492h.822c-.156.4-.408.708-.756.924a2.176 2.176 0 01-1.182.324A2.08 2.08 0 01.687 6.385a2.147 2.147 0 01-.282-1.098zm6.303 2.148c-.312 0-.594-.07-.846-.21a1.557 1.557 0 01-.594-.6 1.827 1.827 0 01-.216-.9c0-.336.074-.634.222-.894.148-.26.35-.46.606-.6.256-.14.542-.21.858-.21.316 0 .602.07.858.21.256.14.458.34.606.6.148.26.222.558.222.894 0 .336-.076.634-.228.894-.152.26-.36.462-.624.606-.26.14-.548.21-.864.21zm0-.594a1 1 0 00.492-.126.954.954 0 00.378-.378c.096-.168.144-.372.144-.612s-.046-.442-.138-.606a.927.927 0 00-.366-.378 1 1 0 00-.492-.126 1 1 0 00-.492.126.902.902 0 00-.354.378 1.269 1.269 0 00-.132.606c0 .356.09.632.27.828a.916.916 0 00.69.288zm3.076-3.9v4.44H9.1V2.94h.684zm2.332 4.494c-.312 0-.594-.07-.846-.21a1.557 1.557 0 01-.594-.6 1.827 1.827 0 01-.216-.9c0-.336.074-.634.222-.894.148-.26.35-.46.606-.6.256-.14.542-.21.858-.21.316 0 .602.07.858.21.256.14.458.34.606.6.148.26.222.558.222.894 0 .336-.076.634-.228.894-.152.26-.36.462-.624.606-.26.14-.548.21-.864.21zm0-.594a1 1 0 00.492-.126.954.954 0 00.378-.378c.096-.168.144-.372.144-.612s-.046-.442-.138-.606a.927.927 0 00-.366-.378 1 1 0 00-.492-.126 1 1 0 00-.492.126.902.902 0 00-.354.378 1.269 1.269 0 00-.132.606c0 .356.09.632.27.828a.916.916 0 00.69.288zm3.076-2.286c.1-.168.232-.298.396-.39.168-.096.366-.144.594-.144v.708h-.174c-.268 0-.472.068-.612.204-.136.136-.204.372-.204.708v1.74h-.684V4.075h.684v.48zm4.611 2.88c-.312 0-.594-.07-.846-.21a1.557 1.557 0 01-.594-.6 1.827 1.827 0 01-.215-.9c0-.336.073-.634.221-.894.148-.26.35-.46.607-.6.256-.14.541-.21.858-.21.316 0 .602.07.858.21.256.14.457.34.605.6.148.26.223.558.223.894 0 .336-.076.634-.229.894-.151.26-.36.462-.623.606-.26.14-.549.21-.864.21zm0-.594a1 1 0 00.492-.126.954.954 0 00.378-.378c.097-.168.145-.372.145-.612s-.047-.442-.139-.606a.927.927 0 00-.365-.378 1 1 0 00-.492-.126 1 1 0 00-.492.126.902.902 0 00-.354.378 1.269 1.269 0 00-.133.606c0 .356.09.632.27.828a.916.916 0 00.69.288zm3.077-2.28a1.448 1.448 0 011.152-.54c.288 0 .55.072.786.216.24.14.428.338.564.594.136.256.204.55.204.882 0 .332-.068.63-.204.894-.136.26-.324.464-.564.612a1.48 1.48 0 01-.786.216c-.252 0-.476-.05-.672-.15a1.541 1.541 0 01-.48-.384v2.052h-.684V4.075h.684v.486zm2.01 1.152c0-.228-.048-.424-.144-.588a.916.916 0 00-.372-.378.987.987 0 00-.984 0 1.011 1.011 0 00-.372.384 1.218 1.218 0 00-.138.594c0 .228.046.428.138.6.096.168.22.296.372.384a.987.987 0 00.984 0 .989.989 0 00.372-.396 1.21 1.21 0 00.144-.6zm2.17-1.08v1.83c0 .124.028.214.084.27.06.052.16.078.3.078h.42v.57h-.54c-.308 0-.544-.072-.708-.216-.164-.144-.246-.378-.246-.702v-1.83h-.39v-.558h.39v-.822h.69v.822h.804v.558h-.804zm1.783-.996a.424.424 0 01-.313-.126.424.424 0 01-.126-.312c0-.124.043-.228.127-.312a.424.424 0 01.312-.126c.12 0 .221.042.305.126a.424.424 0 01.127.312.424.424 0 01-.127.312.417.417 0 01-.305.126zm.335.438V7.38h-.684V4.075h.684zm2.333 3.36c-.312 0-.594-.07-.846-.21a1.557 1.557 0 01-.594-.6 1.827 1.827 0 01-.216-.9c0-.336.074-.634.222-.894.148-.26.35-.46.606-.6.256-.14.542-.21.858-.21.316 0 .602.07.858.21.256.14.458.34.606.6.148.26.222.558.222.894 0 .336-.076.634-.228.894-.152.26-.36.462-.624.606-.26.14-.548.21-.864.21zm0-.594a1 1 0 00.492-.126.954.954 0 00.378-.378c.096-.168.144-.372.144-.612s-.046-.442-.138-.606a.927.927 0 00-.366-.378 1 1 0 00-.492-.126 1 1 0 00-.492.126.902.902 0 00-.354.378 1.269 1.269 0 00-.132.606c0 .356.09.632.27.828a.916.916 0 00.69.288zm4.06-2.82c.26 0 .492.054.696.162.208.108.37.268.486.48.116.212.174.468.174.768v1.95h-.678V5.533c0-.296-.074-.522-.222-.678-.148-.16-.35-.24-.606-.24s-.46.08-.612.24c-.148.156-.222.382-.222.678V7.38h-.684V4.075h.684v.378c.112-.136.254-.242.426-.318.176-.076.362-.114.558-.114z"
        fill="#2A2D3F"
      />
      <Path
        d="M5.7 21.8a5.2 5.2 0 100-10.4 5.2 5.2 0 000 10.4z"
        stroke="#F26B6B"
        strokeWidth={0.7893}
        strokeMiterlimit={10}
      />
      <Path
        d="M20.9 21.8a5.2 5.2 0 100-10.4 5.2 5.2 0 000 10.4z"
        fill="#B8B8CD"
      />
      <Path
        d="M36 21.8a5.2 5.2 0 100-10.4 5.2 5.2 0 000 10.4z"
        fill="#2A2D3F"
      />
      <Path d="M5.7 19.8a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" fill="#F26B6B" />
    </Svg>
  )
}

export default SvgComponent