import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import appTheme from "../../utils/theme";
import * as SecureStore from "expo-secure-store";
import {
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import Button from "../common/Button";
import { Eye, EyeOff } from "../../utils/icons";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { COLORS } = appTheme;
  const { setUser } = useAuth();

  const loginHandler = async () => {
    if (!username || username !== "SnapSphere") {
      Alert.alert("Invalid Username", "Please Enter valid Username");
      return null;
    }
    setUser(true);
    await SecureStore.setItemAsync("_authState", "true");
  };
  const toggleHandler = () => setShowPassword(!showPassword);
  return (
    <Box gap={20}>
      <Input
        variant={"rounded"}
        height={50}
        bg={COLORS.InputGray}
        borderWidth={0}
        paddingHorizontal={10}
        paddingVertical={5}
        isRequired
      >
        <InputField
          placeholder="Username"
          value={username}
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setUsername(e.nativeEvent.text)
          }
        />
      </Input>
      <Input
        variant={"rounded"}
        height={50}
        bg={COLORS.InputGray}
        borderWidth={0}
        paddingHorizontal={10}
        paddingVertical={5}
      >
        <InputField
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setPassword(e.nativeEvent.text)
          }
        />
        <InputSlot pr="$3" onPress={toggleHandler}>
          <InputIcon as={showPassword ? Eye : EyeOff} />
        </InputSlot>
      </Input>
      <Box mt="$10">
        <Button title="Login" onPress={loginHandler} />
      </Box>
    </Box>
  );
};

export default Login;
