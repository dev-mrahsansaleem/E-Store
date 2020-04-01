import * as Google from "expo-google-app-auth";
import Constants from "expo-constants";

const scope = ["profile", "email"];

const loginAsync = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: Constants.manifest.extra.GoogleAppId.android,
      iosClientId: Constants.manifest.extra.GoogleAppId.ios,
      scope
    });
    if (result.type === "success") {
      return Promise.resolve(result.accessToken);
    } else {
      return Promise.reject("google no success");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GoogleApi = {
  loginAsync
};
