import React, {useRef, useState} from 'react';
import {AvatarImage, Image, Text, View} from '@gluestack-ui/themed';
import {FlatList, useWindowDimensions} from 'react-native';
import {Comment, Heart} from '../../utils/icons';
import PostView from '../../utils/icons/PostView';
import Carousel from './Carousel';
import {POSTS_DATA_TYPE} from '../../utils/Constants';
import CustomPaginationDots from './CustomPaginationDots';

const Post = ({id, item}: {id: number | string; item: POSTS_DATA_TYPE}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const flatListRef = useRef<FlatList | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const WINDOW_WIDTH = useWindowDimensions().width;
  const MARGIN = 20;
  const POST_WIDTH = WINDOW_WIDTH - MARGIN * 2;

  const renderItem = ({item}: {item: string}) => (
    <Image
      source={{uri: item}}
      alt="post image"
      width={POST_WIDTH}
      height={350 - 90}
    />
  );

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <View
      key={id}
      width={POST_WIDTH}
      bg="white"
      marginVertical={'$2'}
      borderRadius={15}>
      <View
        height={50}
        flex={0}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginHorizontal={'$2'}>
        <View
          flex={0}
          flexDirection="row"
          width={'auto'}
          alignItems="center"
          w={POST_WIDTH / 2}
          gap={5}>
          <AvatarImage
            source={{
              uri:
                item.author_image ||
                'https://randomuser.me/api/portraits/men/1.jpg',
            }}
            width={35}
            height={35}
            alt="user avatar"
            position="relative"
          />
          <Text
            fontFamily="CircularStd-Bold"
            fontWeight="$normal"
            fontSize={16}>
            {item.username}
          </Text>
        </View>
        <View>
          <Text fontSize={14} fontFamily="CircularStd-Light">
            {item.publishDate || '1 hour ago'}
          </Text>
        </View>
      </View>
      {item.images.length > 1 ? (
        <Carousel
          flatListRef={flatListRef}
          data={item.images}
          renderItem={renderItem}
          setActiveIndex={setActiveIndex}
        />
      ) : (
        <Image
          source={{uri: item.images[0]}}
          alt="post image"
          width={POST_WIDTH}
          height={350 - 90}
        />
      )}

      <View
        height={40}
        flex={0}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginHorizontal={'$2'}>
        <View
          flex={0}
          flexDirection="row"
          width={'auto'}
          alignItems="center"
          w={POST_WIDTH / 2}
          gap={10}>
          <Heart />
          <Comment />
          <View px={POST_WIDTH / 3}>
            {item.images.length > 1 && (
              <CustomPaginationDots
                length={item.images.length}
                selectedIndex={activeIndex}
              />
            )}
          </View>
        </View>

        <View>
          <PostView />
        </View>
      </View>
      <Text
        ml="$2"
        mb="$1"
        display="flex"
        alignItems="center"
        sx={{
          fontFamily: 'CircularStd-Bold',
        }}>
        <Text color="$warmGray800" fontWeight="$bold" size="xs">
          {item.username}
        </Text>{' '}
        {item.description &&
          (showFullDescription ? (
            <Text
              color="$warmGray800"
              size="xs"
              sx={{
                fontFamily: 'CircularStd-light',
              }}>
              {item.description}
              {item.description.length > 100 && (
                <Text
                  size="xs"
                  ml="$2"
                  fontWeight="$bold"
                  onPress={toggleDescription}>
                  {' '}
                  less
                </Text>
              )}
            </Text>
          ) : (
            <Text>
              <Text
                color="$warmGray800"
                size="xs"
                sx={{
                  fontFamily: 'CircularStd-light',
                }}>
                {item.description.length > 100
                  ? item.description.substring(0, 100) + '.....'
                  : item.description}
              </Text>
              {item.description.length > 100 && (
                <Text size="xs" ml="$2" onPress={toggleDescription}>
                  more
                </Text>
              )}
            </Text>
          ))}
      </Text>
    </View>
  );
};

export default Post;
