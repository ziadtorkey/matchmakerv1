import { StyleSheet } from "react-native";
import { Platform } from "react-native";
export default (styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    // marginTop: 3,
    // marginLeft: -10,
    borderRadius: 120 / 2
  }
}));
