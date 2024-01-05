import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EyeOff() {
  return (
    <Svg width={20} height={18} viewBox="0 0 20 18" fill="none">
      <Path
        d="M7.76 11.367a3.123 3.123 0 01-.925-2.23A3.16 3.16 0 0110 5.973c.867 0 1.665.35 2.23.925M13.105 9.699a3.158 3.158 0 01-2.537 2.542"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.655 14.472C3.068 13.226 1.724 11.406.75 9.137c.984-2.279 2.337-4.109 3.934-5.365C6.27 2.516 8.102 1.834 10 1.834c1.909 0 3.739.692 5.335 1.957M17.447 5.99a15.359 15.359 0 011.802 3.147c-1.967 4.557-5.443 7.302-9.25 7.302-.863 0-1.714-.14-2.532-.413M17.887 1.25L2.113 17.023"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EyeOff;
