import { Image } from "@gluestack-ui/themed";
import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StoryType } from "../../utils/Constants";

interface IStory extends StoryType {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Story = ({ onPress, id, story_url, watchedStatus }: IStory) => {
  return (
    <TouchableOpacity onPress={onPress} key={id} style={styles.story}>
      <View style={styles.container}>
        <LinearGradient
          colors={
            !watchedStatus ? ["#888BF4", "#5151C6"] : ["#BDBDBD", "#BDBDBD"]
          }
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.storyBackground}
        >
          <Image
            source={{ uri: story_url }}
            style={styles.storyImage}
            alt={story_url}
          />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    marginRight: 10,
  },
  container: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: "hidden",
  },
  storyBackground: {
    flex: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  storyImage: {
    width: 75,
    height: 75,
    borderRadius: 40,
  },
});
