import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Box,
  Image,
  Textarea,
  TextareaInput,
  View,
} from "@gluestack-ui/themed";
import uuid from "react-native-uuid";
import CustomPaginationDots from "../components/common/CustomPaginationDots";
import Carousel from "../components/common/Carousel";
import { COLORS } from "../utils/theme/Theme";
import Button from "../components/common/Button";
import { usePostContext } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";
import { Camera, CameraCapturedPicture, CameraType } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GalleryIcon, SwitchCameraIcon } from "../utils/icons";
import { BottomTabNavigationEnum } from "../utils/Constants";

export const defaultImage = require("../../assets/welcome-image.png");

const PostScreen = () => {
  const navigation = useNavigation<any>();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const cameraRef = useRef<Camera | null>(null);
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.front);
  const [imagesToUpload, setImagesToUpload] = useState<any>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [description, setDescription] = useState("");
  const flatListRef = useRef<FlatList | null>(null);
  const { addPost } = usePostContext();
  const { userData } = useAuth();

  const toggleCameraType = () =>
    setCameraType((prev) =>
      prev === CameraType.front ? CameraType.back : CameraType.front
    );

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        let photo: CameraCapturedPicture =
          await cameraRef.current.takePictureAsync();
        // console.log(photo, "photo"); // Here, you can handle the captured photo (e.g., save, display, etc.)
        setImagesToUpload([photo]);
      } catch (err) {
        console.log("Error taking picture:", err);
      }
    }
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Set mediaType to 'photo' to allow selecting photos
      // allowsEditing: true,
      quality: 1,
      allowsMultipleSelection: true,
      orderedSelection: true,
      selectionLimit: 3, // Set selection to 'multiple' to allow selecting multiple photos
    });
    if (result.assets && result.assets.length > 0) {
      setImagesToUpload(result.assets);
    }
  };

  const uploadImage = async () => {
    addPost({
      id: uuid.v4() as string,
      images: imagesToUpload?.map((image: { uri: any }) => image.uri),
      publishDate: "8 feb",
      title: "Make design systems people want to use.",
      description: description,
      author: userData?.name || "Digvijay Gupta",
      username: userData?.username || "_digvijayg",
      likes: "14",
      comments: "6.5k",
    });
    setImagesToUpload([]);
    setDescription("");
    navigation.navigate(BottomTabNavigationEnum.HOME);
  };

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  const renderItem = ({
    item,
  }: {
    item: { uri: string; fileName: string };
  }) => (
    <Image
      size="md"
      w="100%"
      alt="lifestyleBee"
      source={item.uri}
      sx={{ width: screenWidth, height: screenHeight / 1.75 }}
    />
  );

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "white" }}>
      <Box h="$full" bg="$white">
        {imagesToUpload.length === 0 ? (
          <Camera
            style={{
              flex: 1,
              position: "relative",
              width: screenWidth,
              height: screenHeight / 1.75,
            }}
            type={cameraType}
            ref={(ref: Camera) => (cameraRef.current = ref)}
          >
            <View
              style={{
                position: "absolute",
                bottom: 5,
                alignSelf: "center",
                width: 80,
                height: 80,
                borderWidth: 4,
                borderColor: "white",
                borderRadius: 40,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: "white",
                  borderColor: "#000",
                  borderWidth: 1,
                  overflow: "hidden",
                  alignSelf: "center",
                }}
                onPress={takePicture}
              />
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 15,
                left: 10,
                alignSelf: "flex-start",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "gray",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={openGallery}
              >
                <GalleryIcon />
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 15,
                right: 10,
                alignSelf: "flex-start",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "gray",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={toggleCameraType}
              >
                <SwitchCameraIcon />
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <Box position="relative">
            <Carousel
              flatListRef={flatListRef}
              data={imagesToUpload}
              renderItem={renderItem}
              setActiveIndex={setActiveIndex}
            />
            {imagesToUpload.length > 1 && (
              <CustomPaginationDots
                length={imagesToUpload.length}
                selectedIndex={activeIndex}
              />
            )}
          </Box>
        )}

        <Textarea
          size="md"
          rounded={"$2xl"}
          mt={20}
          borderWidth={0}
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          w={screenWidth - 50}
          alignSelf="center"
          bg={COLORS.InputGray}
        >
          <TextareaInput
            rounded={"$full"}
            bg={COLORS.InputGray}
            placeholder="Please add a caption..."
            value={description}
            onChangeText={setDescription}
          />
        </Textarea>

        <Box mt="$5" w={screenWidth - 50} alignSelf="center">
          <Button
            title="Upload Post"
            onPress={uploadImage}
            disabled={imagesToUpload.length === 0}
          />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default PostScreen;
