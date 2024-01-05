import { HStack, View } from "@gluestack-ui/themed";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo, Message } from "../utils/icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import { Camera } from "expo-camera";

const HomeScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View px={"$5"}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          style={styles.shadow}
        >
          <Logo />
          <TouchableOpacity>
            <Message />
          </TouchableOpacity>
        </HStack>
      </View>
      <Stories />
      <Posts />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#5151C6",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.5,
    elevation: 5,
    backgroundColor: "none",
  },
  safeAreaStyle: {
    backgroundColor: "#fff",
  },
});
