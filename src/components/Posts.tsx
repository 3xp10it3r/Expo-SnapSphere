import {View} from '@gluestack-ui/themed';
import React from 'react';
import Post from './common/Post';
import {FlatList, Platform, StyleSheet} from 'react-native';
import {POSTS_DATA_TYPE} from '../utils/Constants';
import {usePostContext} from '../context/PostContext';

const renderItem = ({item}: {item: POSTS_DATA_TYPE}) => {
  return <Post key={item.id} id={item.id} item={item} />;
};

const Posts = () => {
  const {posts} = usePostContext();
  return (
    <View
      mt={Platform.OS === 'ios' ? '$10' : '$1'}
      backgroundColor="#F2F2F2"
      alignItems="center"
      paddingBottom={'$96'}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 10,
    // flex: 0,
    // overflow: 'hidden',
    paddingBottom: 100,
  },
});
