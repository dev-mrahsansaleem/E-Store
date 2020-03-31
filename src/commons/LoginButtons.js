import React from "react";
import { Box, Text } from "react-native-design-utility";
import { TouchableOpacity, Image } from "react-native";
import { images } from "../constants/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../constants/theme.js";

const bgColor = type => {
  switch (type) {
    case "google":
      return "googleBlue";
    case "fb":
      return "fbBlue";
    case "email":
      return "redDark";
    default:
      return "white";
  }
};
const LoginButton = ({ children, type, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Box
      radius="xs"
      dir="row"
      align="center"
      bg={bgColor(type)}
      self="center"
      p="xxs"
      w="80%"
      mb="sm"
    >
      <Box mr="xxs">
        <Box
          radius="xs"
          center
          bg="white"
          h={32}
          w={32}
          style={{ position: "relative" }}
        >
          {type === "google" && <Image source={images.googleIcon} />}
          {type === "fb" && (
            <MaterialCommunityIcons
              name="facebook"
              color={theme.color.fbBlue}
              size={30}
              style={{ position: "absolute", right: -1, bottom: -3 }}
            />
          )}
          {type === "email" && (
            <MaterialCommunityIcons
              name="email-outline"
              color={theme.color.redDark}
              size={30}
            />
          )}
        </Box>
      </Box>
      <Box>
        <Text color="white" size="md">
          {children}
        </Text>
      </Box>
    </Box>
  </TouchableOpacity>
);

export default LoginButton;
