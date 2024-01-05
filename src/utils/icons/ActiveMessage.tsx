import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function ActiveMessage() {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.284 6.69L8.99 13.025 1.623 8.491c-.965-.595-.77-2.061.318-2.377l17.395-5.061c.989-.287 1.904.64 1.607 1.635l-5.16 17.377c-.324 1.087-1.774 1.275-2.36.304l-4.432-7.344"
        fill="url(#paint0_linear_3_3953)"
      />
      <Path
        d="M15.284 6.69L8.99 13.025 1.623 8.491c-.965-.595-.77-2.061.318-2.377l17.395-5.061c.989-.287 1.904.64 1.607 1.635l-5.16 17.377c-.324 1.087-1.774 1.275-2.36.304l-4.432-7.344"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_3_3953"
          x1={21}
          y1={21}
          x2={0.674227}
          y2={20.6633}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ActiveMessage;
