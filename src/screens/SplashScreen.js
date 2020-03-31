import React from "react";
import { Box } from "react-native-design-utility";
import OnbordingLogo from "../commons/OnbordingLogo";

export default class SplashScreen extends React.Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }
  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Auth");
    }, 1000);
  };
  render() {
    return (
      <Box f={1} center>
        <OnbordingLogo />
      </Box>
    );
  }
}
