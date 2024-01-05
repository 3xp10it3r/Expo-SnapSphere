import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function Settings({stroke, aspect}: {stroke?: string; aspect?: number}) {
  return (
    <Svg
      width={aspect || 20}
      height={aspect || 22}
      viewBox="0 0 20 22"
      fill="none">
      <Path
        clipRule="evenodd"
        d="M18.806 6.624l-.622-1.08a1.913 1.913 0 00-2.609-.705v0a1.904 1.904 0 01-2.608-.678 1.832 1.832 0 01-.257-.915v0a1.913 1.913 0 00-1.913-1.968H9.543A1.904 1.904 0 007.64 3.191v0a1.913 1.913 0 01-1.913 1.886 1.83 1.83 0 01-.915-.257v0a1.913 1.913 0 00-2.609.705l-.668 1.099a1.913 1.913 0 00.696 2.608v0a1.913 1.913 0 010 3.314v0a1.904 1.904 0 00-.696 2.6v0l.632 1.089a1.913 1.913 0 002.608.741v0a1.895 1.895 0 012.6.696c.164.277.253.593.256.915v0c0 1.056.857 1.913 1.913 1.913h1.254c1.053 0 1.908-.85 1.913-1.904v0a1.904 1.904 0 011.913-1.913c.322.009.636.097.916.256v0a1.913 1.913 0 002.608-.695v0l.66-1.099a1.904 1.904 0 00-.696-2.608v0a1.903 1.903 0 01-.696-2.609c.166-.29.406-.53.696-.696v0a1.913 1.913 0 00.695-2.6v0-.008z"
        stroke={stroke || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={10.1747}
        cy={10.8891}
        r={2.63616}
        stroke={stroke || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Settings;
