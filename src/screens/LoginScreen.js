import React from "react";
import { Box, Text } from "react-native-design-utility";
import OnbordingLogo from "../commons/OnbordingLogo";
import LoginButton from "../commons/LoginButtons";
import { Alert, Animated } from "react-native";
import { FacebookApi } from "../Api/facebook";
import { GoogleApi } from "../Api/goggle";

class LoginScreen extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.parallel([this.opacityAnim(), this.positionAnim()]);
  }

  onGooglePress = async () => {
    try {
      const tokken = await GoogleApi.loginAsync();
      console.log("tokken: ", tokken);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  onFbPress = async () => {
    try {
      const tokken = await FacebookApi.loginAsync();
      console.log("tokken: ", tokken);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  onEmailPress = () => {
    Alert.alert(
      "Email pressed will create or open a sign up form after complitiong tutotrial"
    );
  };

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 400,
      delay: 100
    }).start();
  };

  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  render() {
    const { opacity } = this.state;
    const logoTrans = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0]
    });
    return (
      <Box f={1} center bg="white">
        <Animated.View
          style={{
            flex: 1,
            transform: [
              {
                translateY: logoTrans
              }
            ]
          }}
        >
          <Box f={1} center>
            <OnbordingLogo />
          </Box>
        </Animated.View>

        <Animated.View style={{ flex: 0.9, width: "100%", opacity }}>
          <LoginButton onPress={this.onGooglePress} type="google">
            Continue with Google
          </LoginButton>
          <LoginButton onPress={this.onFbPress} type="fb">
            Continue with Facebook
          </LoginButton>
          <LoginButton onPress={this.onEmailPress} type="email">
            Continue with Email
          </LoginButton>
        </Animated.View>
      </Box>
    );
  }
}
export default LoginScreen;
