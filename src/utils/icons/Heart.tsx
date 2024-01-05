import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function Heart() {
  return (
    <Svg width={30} height={30} viewBox="0 0 21 21" fill="none">
      <Path
        d="M17.266 4.484a4.21 4.21 0 00-2.977-1.238 4.198 4.198 0 00-2.978 1.238l-.811.814-.812-.814a4.204 4.204 0 00-5.955 0 4.231 4.231 0 000 5.974l.812.814 5.955 5.974 5.955-5.974.811-.814A4.225 4.225 0 0018.5 7.471a4.237 4.237 0 00-1.234-2.987v0z"
        stroke="url(#paint0_linear_165_1545)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_165_1545"
          x1={18.5}
          y1={17.2463}
          x2={2.24075}
          y2={16.9384}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Heart;
