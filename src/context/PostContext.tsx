import React, {createContext, useContext, useState, ReactNode} from 'react';
import {POSTS_DATA, POSTS_DATA_TYPE} from '../utils/Constants';

interface PostContextProps {
  posts: POSTS_DATA_TYPE[];
  addPost: (newPost: POSTS_DATA_TYPE) => void;
  addPostToEnd: (newPosts: POSTS_DATA_TYPE[]) => void;
}

const PostContext = createContext<PostContextProps | undefined>(undefined);

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider: React.FC<PostProviderProps> = ({children}) => {
  const [posts, setPosts] = useState<POSTS_DATA_TYPE[]>(POSTS_DATA);

  const addPost = (newPost: POSTS_DATA_TYPE) => {
    setPosts([newPost, ...posts]);
  };
  const addPostToEnd = (newPosts: POSTS_DATA_TYPE[]) => {
    setPosts(prevPosts => [...prevPosts, ...newPosts]);
  };

  const contextValue = React.useMemo(
    () => ({posts, addPost, addPostToEnd}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [posts],
  );

  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};

export const usePostContext = (): PostContextProps => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};
