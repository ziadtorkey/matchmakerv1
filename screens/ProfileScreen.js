import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";
import "firebase/firestore";
import React from "react";
import { Button, FlatList, Platform, Text, View } from "react-native";
import { connect } from "react-redux";
import ProfileImage from "../components/UI/ProfileImage";
import formatNumber from "../functions/textUtils";
import { setUserData } from "../redux/app-redux";
import styles from "../Styles/profileStyles";

mapStateToProps = state => {
  return {
    rUserid: state.rUserid,
    rUsername: state.rUsername,
    rUserLoveNumber: state.rUserLoveNumber,
    rBirthDate: state.rBirthDate,
    rEmail: state.rEmail,
    rGender: state.rGender,
    rConnections: state.rConnections,
    rRefreshToken: state.rRefreshToken,
    rProfilePicture: state.rProfilePicture
  };
};

mapDispatchToProps = dispatch => {
  return {
    setUserData: (
      rUserid,
      rUsername,
      rBirthDate,
      rEmail,
      rGender,
      rRefreshToken,
      rUserLoveNumber,
      rProfilePicture
    ) => {
      dispatch(
        setUserData(
          rUserid,
          rUsername,
          rBirthDate,
          rEmail,
          rGender,
          rRefreshToken,
          rUserLoveNumber,
          rProfilePicture
        )
      );
    }
  };
};

class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {};
    // console.log("Constructor Props: " + this.props.rUsername);
    if (!!this.props.rUserid) {
    } else {
      var user = firebase.auth().currentUser;
      // console.log("Firebase User: " + user.uid);
      this.readUserData(user.uid);
    }
  }

  componentWillMount() {
    // console.log("Profile Page Will Mount");
    // console.log("ComponentDidMount Props: " + this.props.rUserid);
    // console.log(!!this.props.rUserid);

    if (!!this.props.rUserid) {
    } else {
      var user = firebase.auth().currentUser;
      //console.log("Firebase User: " + user.uid);
      this.readUserData(user.uid);
    }
  }

  addUserDataToRedux = (userid, loggedInUser) => {
    this.props.setUserData(
      userid,
      loggedInUser.username,
      loggedInUser.birthDate,
      loggedInUser.email,
      loggedInUser.gender,
      loggedInUser.refreshToken,
      loggedInUser.userLoveNumber,
      loggedInUser.profile_picture
    );
  };

  readUserData = userid => {
    console.log("ReadUserData Started");
    console.log("ReadUserData Props: " + this.props.rUsername);
    // firebase
    //   .database()
    //   .ref("users/" + userid)
    //   .on("value", userData => {
    //     //console.log("Databse userData: " + userData.val().birthDate);
    //     var loggedInUser = userData.val();
    //     this.addUserDataToRedux(userid, loggedInUser);
    //   });
    let userDate = firebase
      .firestore()
      .collection("users")
      .doc(userid);
    userDate.get().then(user => {
      this.addUserDataToRedux(userid, user.data());
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewtop}>
          <View style={styles.imageContainer}>
            <ProfileImage rUserLoveNumber={this.props.rUserLoveNumber} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>
              Username: {this.props.rUsername}
            </Text>
            <Text style={styles.detailsText}>
              Love Number: {this.props.rUserLoveNumber}
            </Text>
            <Text style={styles.detailsText}>
              Birthdate: {this.props.rBirthDate}
            </Text>
            <Text style={styles.detailsText}>Gender: {this.props.rGender}</Text>
          </View>
        </View>

        <View style={styles.viewmid}>
          <View style={styles.badgecontainer}>
            <Text style={styles.badgeCount}>{formatNumber(1214)}</Text>
            <Text style={styles.badgeText}>Connections</Text>
          </View>
          <View style={styles.badgecontainer}>
            <Text style={styles.badgeCount}>64</Text>
            <Text style={styles.badgeText}>Requests</Text>
          </View>
          <View style={styles.badgecontainer}>
            <Ionicons
              name={Platform.OS === "ios" ? "ios-person-add" : "md-person-add"}
              size={30}
              color="royalblue"
            />
            <Button
              style={styles.button}
              title="Add New"
              color="royalblue"
              onPress={() => this.props.navigation.navigate("AddConnection")}
            />
          </View>
        </View>
        <View style={styles.viewbottom}>
          <Text>Recent Connections</Text>
          <FlatList />
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
