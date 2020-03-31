import React from "react";
import { Box, Text } from "react-native-design-utility";

import { Image } from "react-native";
import { images } from "../constants/images";
const OnbordingLogo = () => (
  <Box center>
    <Box mb="xs">
      <Image source={images.logo} />
    </Box>
    <Box mb="xs">
      <Text size="xxl">
        E-
        <Text size="xxl" color="green">
          Store
        </Text>
      </Text>
    </Box>
    <Text size="sm"> Wanna shop try E-Store </Text>
  </Box>
);
export default OnbordingLogo;
