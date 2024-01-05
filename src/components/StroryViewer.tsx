import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {
  LongPressGestureHandler,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import {
  useFocusEffect,
  useNavigation,
  useIsFocused,
} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import {Box, Image, Text} from '@gluestack-ui/themed';
import {Home} from '../utils/icons';
import {userStories} from '../utils/Constants';
import {SafeAreaView} from 'react-native-safe-area-context';

// Debounce function to prevent rapid firing
const debounce = (func: any, delay: number) => {
  let inDebounce: any;
  return function (this: any, ...args: any[]) {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(this, args), delay);
  };
};

const StoryViewer = ({route}: any) => {
  const {storyIndex} = route?.params;

  const isFocused = useIsFocused();
  const navigation = useNavigation<any>();
  const isLongPressActiveRef = useRef<boolean>(false);

  const [currentStoryIndex, setCurrentStoryIndex] = useState(storyIndex || 0);
  const [timer, setTimer] = useState(0);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isLongPressActive, setIsLongPressActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    isLongPressActiveRef.current = isLongPressActive;
  }, [isLongPressActive]);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (!isFocused) {
      setCurrentStoryIndex(0);
      return;
    }

    const startTimer = () => {
      interval = setInterval(() => {
        setTimer(prevTimer => {
          if (!isTimerPaused) {
            // Only update the timer if it's not paused
            if (prevTimer >= totalDuration) {
              clearInterval(interval);
              setCurrentStoryIndex((prevIndex: number) => prevIndex + 1);
              return 0;
            }
            return prevTimer + 0.1;
          }
          return prevTimer;
        });
      }, 100);
      // Store the interval ID in the ref for later access
      intervalRef.current = interval;
    };

    if (
      (currentStoryIndex === -1 || currentStoryIndex === userStories.length) &&
      isFocused
    ) {
      clearInterval(interval);
      navigation.navigate('HomeScreen');
      return;
    } else {
      startTimer();
    }

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStoryIndex, isTimerPaused, isFocused, storyIndex]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        clearInterval(intervalRef.current!);
        setTimer(0);
      };
    }, []),
  );

  const totalDuration = 10;
  const progress = (timer / totalDuration) * 100;

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  // Debounced handleTap function
  const debouncedHandleTap = debounce((x: number) => {
    if (x < screenWidth / 2) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    } else {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
    setTimer(0);
  }, 500);

  const handleLongPress = () => {
    setIsLongPressActive(true);
    setIsTimerPaused(true);
  };

  const handleRelease = () => {
    setIsLongPressActive(false);
    setIsTimerPaused(false);
  };

  const handleTap = ({nativeEvent}: any) => {
    const {x} = nativeEvent;
    setTimeout(() => {
      if (!isLongPressActiveRef.current) {
        debouncedHandleTap(x);
      }
    }, 1000);
  };

  if (currentStoryIndex === -1 || currentStoryIndex === userStories.length) {
    return <></>;
  }

  return (
    <SafeAreaView>
      <Box position="relative">
        <Box position="absolute" top={2} zIndex={10}>
          <Progress.Bar
            progress={progress / 100}
            borderColor="rgba(0, 0, 0, 0.1)"
            color="#3498db"
            unfilledColor="rgba(255, 255, 255, 0.5)"
            width={screenWidth}
            height={4}
          />
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="$3"
            ml="$2"
            mt="$2">
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
                return;
              }}>
              <Home />
            </TouchableOpacity>
            <Image
              alt="user-pic"
              source={userStories[currentStoryIndex]?.story_url}
              sx={{width: '$10', height: '$10', borderRadius: '$full'}}
            />
            <Box display="flex" flexDirection="column">
              <Text
                size="md"
                fontWeight="$bold"
                //   style={globalStyles.fontFamily}
                color="$white">
                {userStories[currentStoryIndex]?.username || 'Unknown'}
              </Text>
              <Text size="xs" color="$white">
                {userStories[currentStoryIndex]?.time}
              </Text>
            </Box>
          </Box>
        </Box>
        <LongPressGestureHandler
          onHandlerStateChange={({nativeEvent}) => {
            if (nativeEvent.state === State.ACTIVE) {
              handleLongPress();
            }
            if (nativeEvent.state === State.END) {
              handleRelease();
            }
          }}>
          <TapGestureHandler onHandlerStateChange={handleTap}>
            <Image
              zIndex={1}
              size="md"
              w={screenWidth}
              h={screenHeight}
              alt="lifestyleBee"
              source={userStories[currentStoryIndex]?.story_url}
            />
          </TapGestureHandler>
        </LongPressGestureHandler>
      </Box>
    </SafeAreaView>
  );
};

export default StoryViewer;
