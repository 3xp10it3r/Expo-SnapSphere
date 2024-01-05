import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function Comment() {
  return (
    <Svg width={25} height={25} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.587 11.159a.974.974 0 100-1.944.974.974 0 000 1.944zm-3.785 0a.974.974 0 100-1.944.974.974 0 000 1.944zm-2.812-.974a.974.974 0 01-1.948 0 .974.974 0 011.948 0z"
        fill="url(#paint0_linear_178_2778)"
      />
      <Path
        clipRule="evenodd"
        d="M9.983 1.667c4.842 0 8.35 3.955 8.35 8.345 0 1.403-.408 2.846-1.125 4.164a.875.875 0 00-.058.752l.558 1.87c.125.45-.258.783-.683.65l-1.683-.5c-.459-.15-.817.04-1.242.3-1.217.717-2.733 1.085-4.1 1.085-4.133 0-8.333-3.196-8.333-8.346 0-4.44 3.583-8.32 8.316-8.32z"
        stroke="url(#paint1_linear_178_2778)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_178_2778"
          x1={5.04191}
          y1={11.159}
          x2={14.6556}
          y2={10.3799}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_178_2778"
          x1={1.66658}
          y1={18.3333}
          x2={18.6047}
          y2={18.0527}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#888BF4" />
          <Stop offset={1} stopColor="#5151C6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Comment;
