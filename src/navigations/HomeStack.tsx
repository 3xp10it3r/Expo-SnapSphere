import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StoryViewer from '../components/StroryViewer';
import React from 'react';
import {HomeScreen} from '../screens';
import HomeTabs from './HomeTabs';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeTabs">
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          //   header: () => {
          //     return (
          //       <Box
          //         bg="$white"
          //         display="flex"
          //         flexDirection="row"
          //         alignItems="center"
          //         px="$2">
          //         <Box display="flex" flex={2}>
          //           <Image
          //             size="md"
          //             w="50%"
          //             h="$16"
          //             alt="lifestyleBee"
          //             source={Logo}
          //           />
          //         </Box>
          //         <Box
          //           display="flex"
          //           flexDirection="row"
          //           justifyContent="flex-end"
          //           alignItems="center"
          //           gap="$6"
          //           flex={1}>
          //           <Heart color="black" size={24} />
          //           <MessageCircle color="black" size={24} />
          //         </Box>
          //       </Box>
          //     );
          //   },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          //   header: () => {
          //     return (
          //       <Box
          //         bg="$white"
          //         display="flex"
          //         flexDirection="row"
          //         alignItems="center"
          //         px="$2">
          //         <Box display="flex" flex={2}>
          //           <Image
          //             size="md"
          //             w="50%"
          //             h="$16"
          //             alt="lifestyleBee"
          //             source={Logo}
          //           />
          //         </Box>
          //         <Box
          //           display="flex"
          //           flexDirection="row"
          //           justifyContent="flex-end"
          //           alignItems="center"
          //           gap="$6"
          //           flex={1}>
          //           <Heart color="black" size={24} />
          //           <MessageCircle color="black" size={24} />
          //         </Box>
          //       </Box>
          //     );
          //   },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Stories"
        component={StoryViewer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
