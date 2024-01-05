import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Eye() {
  return (
    <Svg width={20} height={17} viewBox="0 0 20 17" fill="none">
      <Path
        clipRule="evenodd"
        d="M13.161 8.053a3.162 3.162 0 11-6.323-.001 3.162 3.162 0 016.323.001z"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M9.998 15.355c3.808 0 7.291-2.738 9.252-7.302C17.289 3.489 13.806.751 9.998.751h.004C6.194.751 2.711 3.489.75 8.053c1.961 4.564 5.444 7.302 9.252 7.302h-.004z"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Eye;
