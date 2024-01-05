import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Message() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M13.855 6.121l-5.663 5.702L1.56 7.74c-.87-.534-.693-1.854.286-2.138l15.655-4.556c.89-.257 1.714.577 1.447 1.472l-4.645 15.64c-.291.978-1.596 1.147-2.123.274l-3.99-6.61"
        stroke="#242424"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Message;
