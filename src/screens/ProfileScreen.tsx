import {
  AvatarImage,
  Box,
  EditIcon,
  Image,
  Input,
  InputField,
  ScrollView,
  Text,
  View,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  Dimensions,
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  TouchableOpacity,
} from "react-native";
import { Settings } from "../utils/icons";
import { usePostContext } from "../context/PostContext";
import { Modal } from "react-native";
import { COLORS } from "../utils/theme/Theme";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/common/Button";
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";

const plusIcon = require("../../assets/plus.png");

const ProfileScreen = () => {
  const { userData, setUserData, setUser } = useAuth();
  const [editUserDetails, setEditUserDetails] = useState<{
    username: string;
    user_profile_image: string;
    name: string;
    address: string;
  }>({
    username: userData?.username || "",
    user_profile_image: userData?.user_profile_image || "",
    name: userData?.name || "",
    address: userData?.address || "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const { posts } = usePostContext();

  const editUserDataHandler = () => {
    setUserData({ ...userData, ...editUserDetails });
    setModalVisible(false);
  };

  const openGallery = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images, // Set mediaType to 'photo' to allow selecting photos
      selectionLimit: 1, // Set selection to 'multiple' to allow selecting multiple photos
    });

    if (result.assets && result.assets.length > 0) {
      setEditUserDetails({
        ...editUserDetails,
        user_profile_image: result.assets[0].uri as string,
      });
    }
  };

  return (
    <ScrollView bg="white">
      <View bg="white">
        <Image
          source={require("../../assets/headerbg.png")}
          width={Dimensions.get("screen").width}
          height={Dimensions.get("screen").height / 5}
          alt="Header Background"
          position="relative"
        />

        <View
          position="absolute"
          top={Dimensions.get("screen").height / 5 / 2 - 10}
          width={Dimensions.get("screen").width}
        >
          <View
            flexDirection="row"
            justifyContent="space-between"
            position="relative"
            px={"$5"}
          >
            <Image
              source={require("../../assets/invisibleitem.png")}
              alt="placeholder"
            />
            <Text
              color="$white"
              fontFamily="CircularStd-Bold"
              fontWeight="$bold"
              fontSize={"$lg"}
            >
              @{userData?.username || "snap_sphere"}
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Settings stroke="#fff" aspect={30} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          bg="white"
          position="absolute"
          bottom={-40}
          marginLeft={Dimensions.get("window").width / 2 - 43}
          width={83}
          height={83}
          rounded={"$full"}
        >
          <AvatarImage
            source={{
              uri:
                userData?.user_profile_image ||
                "https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png",
            }}
            width={80}
            height={80}
            alignSelf="center"
            alt="user avatar"
          />
        </View>
      </View>
      <View flexDirection="column" gap={"$2"} pt={"$12"} alignSelf="center">
        <Text
          color="$black"
          fontSize={30}
          pt={10}
          fontWeight="$bold"
          fontFamily="CircularStd-Black"
          alignSelf="center"
        >
          {userData?.name || "Digvijay Gupta"}
        </Text>
        <Text
          color="$coolGray400"
          pt={5}
          fontSize={22}
          fontFamily="CircularStd-Black"
          alignSelf="center"
        >
          {userData?.address || "Bangalore, India"}
        </Text>
      </View>
      <View
        mx={20}
        flexDirection="row"
        justifyContent="space-around"
        my={"$10"}
        height={50}
        rounded={"$lg"}
        bg="$coolGray100"
        alignItems="center"
      >
        <Text
          fontFamily="CircularStd-Black"
          fontWeight="$extrabold"
          fontSize={"$xl"}
        >
          {userData?.user_followers_count || "20K"}{" "}
          <Text
            fontFamily="CircularStd-Black"
            fontSize={"$lg"}
            fontWeight="$bold"
            color="$coolGray400"
          >
            Followers
          </Text>
        </Text>
        <Text
          fontFamily="CircularStd-Black"
          fontWeight="$extrabold"
          fontSize={"$xl"}
        >
          {userData?.user_following_count || "2K"}{" "}
          <Text
            fontFamily="CircularStd-Black"
            fontSize={"$lg"}
            fontWeight="$bold"
            color="$coolGray400"
          >
            Following
          </Text>
        </Text>
      </View>
      <View
        flexDirection="row"
        px={Dimensions.get("window").width / 4}
        justifyContent="space-around"
        alignItems="center"
      >
        <Image
          source={require("../../assets/web.png")}
          alt="web"
          width={20}
          height={20}
        />
        <Image
          source={require("../../assets/eclipse.png")}
          alt="web"
          width={10}
          height={10}
        />
        <Image
          source={require("../../assets/insta.png")}
          alt="web"
          width={20}
          height={20}
        />
        <Image
          source={require("../../assets/eclipse.png")}
          alt="web"
          width={10}
          height={10}
        />
        <Image
          source={require("../../assets/fb.png")}
          alt="web"
          width={20}
          height={20}
        />
      </View>
      <View
        mx={20}
        flexDirection="row"
        my={"$10"}
        height={50}
        rounded={"$lg"}
        bg="$coolGray100"
      >
        <View
          w={"$1/2"}
          rounded={"$lg"}
          height={50}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontFamily="CircularStd-Black"
            fontWeight="$extrabold"
            fontSize={"$xl"}
          >
            {userData?.user_followers_count ||
              `${
                posts.filter(
                  (post) =>
                    post.username === userData?.username ||
                    post.username === "_digvijayg"
                ).length
              } shots`}
          </Text>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Profile</Text>
            <View
              bg="white"
              width={83}
              height={83}
              rounded={"$full"}
              position="relative"
            >
              <AvatarImage
                source={{
                  uri:
                    editUserDetails?.user_profile_image ||
                    "https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png",
                }}
                width={80}
                height={80}
                alignSelf="center"
                alt="user avatar"
              />

              <TouchableOpacity onPress={() => openGallery()}>
                <View
                  position="absolute"
                  bottom={-80}
                  right={5}
                  rounded={"$full"}
                >
                  <Image
                    source={plusIcon}
                    resizeMode="contain"
                    alt="Plus Icon"
                    width={25}
                    height={25}
                    rounded={"$full"}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View
              flexDirection="column"
              width={Dimensions.get("window").width - 155}
              gap={"$5"}
              alignSelf="center"
            >
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
                  value={editUserDetails.username}
                  onChange={(
                    e: NativeSyntheticEvent<TextInputChangeEventData>
                  ) =>
                    setEditUserDetails({
                      ...editUserDetails,
                      username: e.nativeEvent.text,
                    })
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
                isRequired
              >
                <InputField
                  placeholder="Name"
                  value={editUserDetails.name}
                  onChange={(
                    e: NativeSyntheticEvent<TextInputChangeEventData>
                  ) =>
                    setEditUserDetails({
                      ...editUserDetails,
                      name: e.nativeEvent.text,
                    })
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
                isRequired
              >
                <InputField
                  placeholder="Address"
                  value={editUserDetails.address}
                  onChange={(
                    e: NativeSyntheticEvent<TextInputChangeEventData>
                  ) =>
                    setEditUserDetails({
                      ...editUserDetails,
                      address: e.nativeEvent.text,
                    })
                  }
                />
              </Input>
            </View>

            <View mt={10}>
              <LinearGradient
                colors={["#888BF4", "#5151C6"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.button}
              >
                <TouchableOpacity onPress={editUserDataHandler}>
                  <EditIcon />
                </TouchableOpacity>
              </LinearGradient>
            </View>

            <View mt={10}>
              <Button title="Logout" onPress={() => setUser(false)} />
            </View>
          </View>
        </View>
      </Modal>
      <Box display={"flex"} flexDirection="row" flexWrap="wrap" gap={2} px={25}>
        {posts
          .filter(
            (post) =>
              post.username === userData?.username ||
              post.username === "_digvijayg"
          )
          .map((post) => (
            <View key={post.id}>
              <Image
                source={{ uri: post.images[0] }}
                alt="POST IMAGE"
                height={122}
                width={122}
                rounded={"$md"}
              />
            </View>
          ))}
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginHorizontal: 25,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ProfileScreen;
