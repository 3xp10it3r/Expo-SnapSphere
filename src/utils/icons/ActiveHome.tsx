import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function ActiveHome() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.157 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438V9.838a2.44 2.44 0 00-.962-1.905l-6.58-5.248a3.18 3.18 0 00-3.945 0L3.462 7.943A2.42 2.42 0 002.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229"
        fill="url(#paint0_linear_3_3968)"
      />
      <Path
        d="M9.157 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 00-.962-1.905l-6.58-5.248a3.18 3.18 0 00-3.945 0L3.462 7.943A2.42 2.42 0 002.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229v0"
        stroke="url(#paint1_linear_3_3968)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_3_3968"
          x1={21.5}
          y1={22}
          x2={2.19}
          y2={21.6961}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_3_3968"
          x1={21.5}
          y1={22}
          x2={2.19}
          y2={21.6961}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ActiveHome;
