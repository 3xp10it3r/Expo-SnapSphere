import React, { useEffect } from "react";
import { ActivityIndicator, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, Box } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import InitialScreen from "./src/screens/InitialScreen";
import { PostProvider } from "./src/context/PostContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [fontsLoaded] = useFonts({
    "CircularStd-Black": require("./src/utils/fonts/CircularStd-Black.otf"),
    "CircularStd-Bold": require("./src/utils/fonts/CircularStd-Bold.otf"),
    "CircularStd-Light": require("./src/utils/fonts/CircularStd-Light.otf"),
    "CircularStd-light": require("./src/utils/fonts/CircularStd-Light.otf"),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <PostProvider>
          <NavigationContainer>
            <GluestackUIProvider config={config}>
              {!fontsLoaded ? (
                <ActivityIndicator />
              ) : (
                <Box
                  style={{
                    backgroundColor: isDarkMode ? Colors.black : Colors.white,
                  }}
                  height="100%"
                >
                  <InitialScreen />
                </Box>
              )}
            </GluestackUIProvider>
          </NavigationContainer>
        </PostProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

export default App;
