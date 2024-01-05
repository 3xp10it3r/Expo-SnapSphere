import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export enum COLORS {
  //   primary: '#3E3FF5', // Light purple
  //   secondary: '#5D2DFD', // Dark purple

  //   white: '#fff',
  //   black: '#000000',
  //   green: '#37E39F',
  //   red: '#F9A8BA',
  //   gray: '#6A6A6A',
  //   lightGray: '#dbdbdb',
  //   lightGray1: '#f5f6fa',

  InputGray = '#F3F5F7',
}
export enum SIZES {
  // global sizes
  base = 8,
  font = 14,
  radius = 12,
  padding = 24,

  // font sizes
  h1 = 30,
  h2 = 22,
  h3 = 16,
  h4 = 14,
  body1 = 30,
  body2 = 22,
  body = 20,
  body3 = 16,
  body4 = 14,
  body5 = 12,
  body6 = 10,

  // app dimensions
  WindowWidth = width,
  WindowHeight = height,
}
export const FONTS = {
  h1: {fontFamily: 'CircularStd-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'CircularStd-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'CircularStd-Black', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'CircularStd-Black', fontSize: SIZES.h4, lineHeight: 22},
  body: {fontFamily: 'Roboto-regular', fontSize: SIZES.body, lineHeight: 30},
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  body6: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body6,
    lineHeight: 22,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
