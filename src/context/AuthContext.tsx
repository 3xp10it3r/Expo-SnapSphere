import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {POSTS_DATA_TYPE} from '../utils/Constants';

export type USER_DATA_TYPE = {
  username: string;
  user_profile_image: string;
  user_followers_count?: number | undefined;
  user_following_count?: number | undefined;
  user_posts?: POSTS_DATA_TYPE[] | undefined;
  name: string;
  address: string;
};

type AuthContextType = {
  user: boolean | null;
  setUser: Dispatch<SetStateAction<boolean | null>>;
  userData: USER_DATA_TYPE | undefined;
  setUserData: React.Dispatch<React.SetStateAction<USER_DATA_TYPE | undefined>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

const AuthProvider = (props: {children: ReactNode}): ReactElement => {
  const [user, setUser] = useState<boolean | null>(null);
  const [userData, setUserData] = useState<USER_DATA_TYPE>();

  return (
    <AuthContext.Provider
      {...props}
      value={{user, setUser, userData, setUserData}}
    />
  );
};

export {AuthProvider, useAuth};
