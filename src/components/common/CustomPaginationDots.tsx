import React from 'react';
import {Box} from '@gluestack-ui/themed';
import {TouchableOpacity} from 'react-native';

const CustomPaginationDots = ({
  length,
  selectedIndex,
}: {
  length: number;
  selectedIndex: number;
}) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      mt="$1">
      {Array.from({length}).map((_, index) => (
        <TouchableOpacity
          key={index}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 8,
            height: 8,
            borderRadius: 5,
            marginHorizontal: 6,
            backgroundColor: index === selectedIndex ? '#2f80ed' : '#d6d3d1',
          }}
        />
      ))}
    </Box>
  );
};
export default CustomPaginationDots;
