import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function ActiveProfile() {
  return (
    <Svg width={16} height={20} viewBox="0 0 16 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.985 13.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.281-2.948-7.17-2.948z"
        fill="url(#paint0_linear_49_2690)"
        stroke="url(#paint1_linear_49_2690)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.985 10.006A4.596 4.596 0 103.389 5.41a4.58 4.58 0 004.564 4.596h.032z"
        fill="url(#paint2_linear_49_2690)"
        stroke="url(#paint3_linear_49_2690)"
        strokeWidth={1.42857}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_49_2690"
          x1={15.1545}
          y1={19.2205}
          x2={0.600679}
          y2={18.6319}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_49_2690"
          x1={15.1545}
          y1={19.2205}
          x2={0.600679}
          y2={18.6319}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_49_2690"
          x1={12.5801}
          y1={10.0059}
          x2={3.23896}
          y2={9.85112}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_49_2690"
          x1={12.5801}
          y1={10.0059}
          x2={3.23896}
          y2={9.85112}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ActiveProfile;
