import {Image} from '@gluestack-ui/themed';
import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import Login from '../components/login';
import {SIZES} from '../utils/theme/Theme';

const AuthScreen = () => {
  return (
    <View style={styles.main_view}>
      <Image
        source={require('../../assets/welcome-image.png')}
        width={Dimensions.get('screen').width}
        height={Dimensions.get('screen').height / 2}
        alt="Welcome Image"
        resizeMode="stretch"
      />
      <View style={styles.bottom_sheet}>
        <Login />
        <Image
          source={require('../../assets/group-cards.png')}
          alt="Group Card"
          resizeMode="contain"
          width={SIZES.WindowWidth}
          mt="$10"
        />
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  main_view: {
    position: 'relative',
    flex: 1,
    zIndex: 100,
  },
  bottom_sheet: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    height: '55%',
    width: '100%',
    zIndex: 200,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
});
