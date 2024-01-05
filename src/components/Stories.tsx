import {ScrollView, View} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import Story from './common/Story';
import {StoryType, userStories} from '../utils/Constants';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const [storiesData, setStoriesData] = useState<StoryType[]>(userStories);
  const navigation = useNavigation<any>();

  const watchedStatusHandler = (id: number) => {
    navigation.navigate('Stories', {storyIndex: id});
    const index = storiesData.findIndex((story: StoryType) => story.id === id);
    if (index === -1) {
      return null;
    }
    setStoriesData([
      ...storiesData.filter((_, i) => i !== index),
      {...storiesData[index], watched_status: true},
    ]);
  };

  return (
    <View
      ml={20}
      mb={Platform.OS === 'android' ? 20 : -10}
      mt={Platform.OS === 'android' ? '$2' : '$5'}>
      <ScrollView horizontal gap={5} showsHorizontalScrollIndicator={false}>
        {storiesData.map(({id, story_url, watched_status}) => {
          return (
            <Story
              key={Math.random()}
              onPress={() => watchedStatusHandler(id)}
              id={id}
              story_url={story_url}
              watched_status={watched_status}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Stories;
