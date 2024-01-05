import React from 'react';
import {Pressable, StyleSheet, useWindowDimensions} from 'react-native';
import {View} from 'react-native';
import BottomTabIcon from './common/BottomTabIcon';

type MyTabBarProps = {
  state: any; // You can define the type more accurately based on your needs
  descriptors: any; // You can define the type more accurately based on your needs
  navigation: any;
};

const MyTab = ({state, descriptors, navigation}: MyTabBarProps) => {
  const {width} = useWindowDimensions();
  const MARGIN = 20;
  const TAB_BAR_WIDTH = width - 2 * MARGIN;
  const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;
  return (
    <View style={styles.shadow}>
      <View
        style={[
          styles.tab,
          styles.shadow,
          {width: TAB_BAR_WIDTH, bottom: MARGIN},
        ]}>
        {state.routes.map((route: any, index: any) => {
          const {options} = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={label}>
              <View
                style={[
                  styles.tab_container,
                  isFocused ? styles.shadow : {},
                  {width: TAB_WIDTH},
                  // label === BottomTabNavigationEnum.POST && {
                  //   position: 'relative',
                  //   marginBottom: 35,
                  // },
                ]}>
                <BottomTabIcon routeName={label} isFocused={isFocused} />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default MyTab;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    position: 'absolute',
    left: 20,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    overflow: 'hidden',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 5,
  },
  tab_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    // backgroundColor: '#fff',
  },
});
