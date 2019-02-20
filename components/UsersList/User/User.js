import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import ListImage from "../../UI/ListImage";
import { Ionicons } from "@expo/vector-icons";

const User = props => {
  console.log("User Componenet Props:");
  console.log(props);
  let iconName = "";
  if (props.rGender == "Male") {
    if (Platform.OS == "ios") {
      iconName = "ios-male";
    } else {
      iconName = "md-male";
    }
  } else if (props.rGender == "Female") {
    if (Platform.OS == "ios") {
      iconName = "ios-female";
    } else {
      iconName = "md-female";
    }
  }
  return (
    <TouchableOpacity onPress={props.onUserPressed}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ListImage
            rUserLoveNumber={props.rUserLoveNumber}
            rProfilePicture={props.rProfilePicture}
          />
        </View>
        <Text style={{ alignSelf: "center", fontSize: 16 }}>
          {props.rUsername}
        </Text>
        <Ionicons
          style={{ alignSelf: "center" }}
          name={iconName}
          size={30}
          color="royalblue"
        />
      </View>
    </TouchableOpacity>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    padding: 5,
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 10,
    backgroundColor: "#e7e8e8"
  },
  imageContainer: {
    //backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    //margin: 5
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  shadowsStyling: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    height: 100,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  shadowstyle2: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});
