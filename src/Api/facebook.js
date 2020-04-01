import * as Facebook from "expo-facebook";
import Constants from "expo-constants";

const persmissions = ["public_profile", "email"];

const loginAsync = async () => {
  try {
    // Facebook.initializeAsync(appId: string | undefined, appName: string | undefined): Promise<void>
    //Facebook.FacebookSdk.sdkInitialize(getApplicationContext());
    await Facebook.initializeAsync("218924132677704");
    const {
      type,
      token
    } = await Facebook.logInWithReadPermissionsAsync(
      Constants.manifest.facebookAppId,
      { persmissions }
    );

    if (type === "success") {
      return Promise.resolve(token);
    }

    return Promise.reject("No Success");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const FacebookApi = {
  loginAsync
};
