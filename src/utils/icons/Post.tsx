import * as React from 'react';
import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function Post() {
  return (
    <Svg width={60} height={60} viewBox="0 0 60 60" fill="none">
      <Rect width={60} height={60} rx={30} fill="url(#paint0_linear_3_3969)" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.686 20h-9.372C22.048 20 20 22.312 20 25.585v8.83C20 37.688 22.038 40 25.314 40h9.372C37.962 40 40 37.688 40 34.415v-8.83C40 22.312 37.962 20 34.686 20z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30 24.4v11.2"
        stroke="url(#paint1_linear_3_3969)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M35.6 30H24.4"
        stroke="url(#paint2_linear_3_3969)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_3_3969"
          x1={60}
          y1={60}
          x2={-0.97732}
          y2={58.9898}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_3_3969"
          x1={30.8002}
          y1={35.6}
          x2={29.1737}
          y2={35.5962}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_3_3969"
          x1={35.5999}
          y1={30.8}
          x2={24.3654}
          y2={29.4971}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Post;
