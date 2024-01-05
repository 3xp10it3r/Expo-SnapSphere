import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Alert } from "react-native";
import AuthScreen from "./AuthScreen";
import HomeStack from "../navigations/HomeStack";
import * as SecureStore from "expo-secure-store";

const InitialScreen = () => {
  const { user, setUser } = useAuth();
  const getAuthState = async () => {
    try {
      const value = await SecureStore.getItemAsync("_authState");
      if (value !== null && value === "SnapSphere") {
        setUser(!!value);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Something went wrong!");
    }
  };

  useEffect(() => {
    getAuthState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !user ? <AuthScreen /> : <HomeStack />;
};

export default InitialScreen;
