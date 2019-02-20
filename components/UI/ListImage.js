import React from "react";
import { Image, Text } from "react-native";
import styles from "../../Styles/ListImageStyles";

const ProfileImage = props => {
  let LoveImage = <Image />;
  if (!!props.rProfilePicture) {
    LoveImage = (
      <Image
        source={{ uri: props.rProfilePicture }}
        style={styles.profileImage}
      />
    );
  } else {
    switch (props.rUserLoveNumber) {
      case 1:
        LoveImage = (
          <Image
            source={require("../../assets/images/numbers/1.png")}
            style={styles.profileImage}
          />
        );
        break;
      case 2:
        LoveImage = (
          <Image
            source={require("../../assets/images/numbers/2.png")}
            style={styles.profileImage}
          />
        );
        break;
      case 3:
        LoveImage = (
          <Image
            source={require("../../assets/images/numbers/3.png")}
            style={styles.profileImage}
          />
        );
        break;
      case 4:
        LoveImage = (
          <Image
            source={require("../../assets/images/numbers/4.png")}
            style={styles.profileImage}
          />
        );
        break;
      case 5:
        LoveImage = (
          <Image
            source={require("../../assets/images/numbers/5.png")}
            style={styles.profileImage}
          />
        );
        break;
      case 6:
        LoveImage = (
          <Image
            source={require("../../assets/images/numbers/6.png")}
            style={styles.profileImage}
          />
        );
        break;
      case 7:
        LoveImage = (
          <Image
            source={require("../../assets/images/numbers/7.png")}
            style={styles.profileImage}
          />
        );
        break;
      case 8:
        LoveImage = (
          <Image
            source={require("../../assets/images/numbers/8.png")}
            style={styles.profileImage}
          />
        );
        break;
      case 9:
        LoveImage = (
          <Image
            source={require("../../assets/images/numbers/9.png")}
            style={styles.profileImage}
          />
        );
        break;

      default:
        break;
    }
  }
  return LoveImage;
};

export default ProfileImage;
