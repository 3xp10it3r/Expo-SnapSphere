import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Search() {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.676.667C4.253.667.666 4.174.666 8.499c0 4.326 3.587 7.833 8.01 7.833 1.892 0 3.63-.641 5.001-1.714l2.604 2.54.069.058a.627.627 0 00.803-.06.594.594 0 00-.001-.853l-2.573-2.51A7.71 7.71 0 0016.686 8.5c0-4.325-3.586-7.832-8.01-7.832zm0 1.206c3.742 0 6.776 2.967 6.776 6.626 0 3.66-3.034 6.627-6.776 6.627S1.9 12.159 1.9 8.499c0-3.66 3.034-6.626 6.776-6.626z"
        fill="#200E32"
      />
    </Svg>
  );
}

export default Search;
