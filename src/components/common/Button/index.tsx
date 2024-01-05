import React from "react";
import { Text } from "@gluestack-ui/themed";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({
  title,
  onPress,
  disabled,
  children,
}: {
  title?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled || false}>
      <LinearGradient
        colors={["#888BF4", "#5151C6"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.button}
      >
        <Text color="white" bold size={"lg"} px={"$5"}>
          {title}
        </Text>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flex: 0,
    alignItems: "center",
    alignContent: "center",
    height: 50,
    borderRadius: 25,
    textAlign: "center",
    justifyContent: "center",
  },
});
