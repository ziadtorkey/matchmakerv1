import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { setUserData } from "../../redux/app-redux";
import * as firebase from "firebase";
import "firebase/firestore";
import styles from "../../Styles/AddConnectionStyles";

import UsersList from "../../components/UsersList/UsersList";
import Modal from "react-native-modal";
import ListImage from "../../components/UI/ListImage";
import User from "../../components/UsersList/User/User";

mapStateToProps = state => {
  return {
    rUserid: state.rUserid,
    rUsername: state.rUsername,
    rUserLoveNumber: state.rUserLoveNumber,
    rBirthDate: state.rBirthDate,
    rEmail: state.rEmail,
    rGender: state.rGender,
    rConnections: state.rConnections,
    rRefreshToken: state.rRefreshToken
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

class AddConnectionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputtext: "",
      searchResult: [],
      connectionUsername: "",
      connectionProfilePicture: "",
      connectionUserLoveNumber: "",
      isLoading: false,
      finishedloading: false
    };

    if (!!this.props.rUserid) {
    } else {
      var user = firebase.auth().currentUser;
      console.log("UserAuthorization");
      this.readUserData(user.uid);
    }

    console.log("State Status: ");
    console.log(this.state);
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
    firebase
      .database()
      .ref("users/" + userid)
      .on("value", userData => {
        //console.log("Databse userData: " + userData.val().birthDate);
        var loggedInUser = userData.val();
        this.addUserDataToRedux(userid, loggedInUser);
      });
  };

  onSearchPress = inputtext => {
    console.log("Button Clicked with input: " + inputtext);

    this.setState({ isLoading: true, finishedloading: false });
    let queryResult = [];

    let users = firebase.firestore().collection("users");
    let usernameResults = users.where("username", ">=", inputtext + "");
    usernameResults
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          queryResult.concat(doc.data());
        });
      })
      .catch(error => {
        alert(error);
      })
      .then(() => {
        let users = firebase.firestore().collection("users");
        let emailResults = users.where("email", ">=", inputtext + "");

        emailResults
          .get()
          .then(snapshot => {
            snapshot.docs.forEach(doc => {
              queryResult.push(doc.data());
            });
          })
          .catch(error => {
            alert(error);
          });
        //
      })
      .then(() => {
        this.setState({
          isLoading: false,
          finishedloading: true
        });
        this.setState({ searchResult: queryResult });
        console.log("Result array:");
        console.log(this.state.searchResult);
        console.log("FinishLoading: " + this.state.finishedloading);
      });
  };

  onUserPressed = userid => {
    //this.props.navigation.navigate("ConnectionProfile", { userid: userid });
    let users = firebase.firestore().collection("users");
    let selecteduser = users.where("userid", "==", userid);
    this.setState({
      connectionUsername: selecteduser.username,
      connectionProfilePicture: selecteduser.profile_picture,
      connectionUserLoveNumber: selecteduser.userLoveNumber,
      isModalVisible: true
    });
  };

  toggleModal = () => {
    console.log("ToggleCalled");
    // this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    let SearchButton = (
      <Button
        style={styles.button}
        title="Search"
        onPress={() => {
          this.onSearchPress(this.state.inputtext);
        }}
      />
    );
    if (this.state.isLoading) {
      SearchButton = <ActivityIndicator />;
    }
    // let flat = (
    //   <FlatList
    //     style={styles.listContainer}
    //     data={[this.state.searchResult]}
    //     extraData={this.state}
    //     renderItem={user => (
    //       <User
    //         rUserLoveNumber={user.item.userLoveNumber}
    //         rProfilePicture={user.item.profile_picture}
    //         rUsername={user.item.username}
    //         rGender={user.item.gender}
    //         onUserPressed={() => {
    //           this.onUserPressed(user.item.userid);
    //         }}
    //       />
    //     )}
    //   />
    // );
    // if (this.state.finishedloading) {
    // } else {
    //   flat = <Text />;
    // }

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {/* <TouchableOpacity style={{ flex: 1 }} onPress={this.toggleModal}> */}
        <View style={styles.viewtop}>
          <Text style={styles.screenname}>Add Connection</Text>
        </View>

        <View style={styles.viewmid}>
          <TextInput
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            selectionColor="gray"
            underlineColorAndroid="#D3D3D3"
            style={styles.textinput}
            value={this.state.inputtext}
            onChangeText={text => {
              this.setState({ inputtext: text });
            }}
            placeholder="Search"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            {SearchButton}
          </View>
        </View>
        <View sytle={styles.viewbottom}>
          <Text style={{ alignSelf: "center" }}>Results</Text>
          <FlatList
            style={styles.listContainer}
            data={this.state.searchResult}
            scrollEnabled={true}
            showsVerticalScrollIndicator={true}
            extraData={this.state.inputtext}
            renderItem={user => (
              <User
                rUserLoveNumber={user.item.userLoveNumber}
                rProfilePicture={user.item.profile_picture}
                rUsername={user.item.username}
                rGender={user.item.gender}
                onUserPressed={() => {
                  this.onUserPressed(user.item.userid);
                }}
              />
            )}
          />
        </View>
        {/* </TouchableOpacity> */}
        {/* <Modal
          isVisible={this.state.isModalVisible}
          backdropOpacity={0.1}
          swipeDirection="left"
          onSwipe={this.toggleModal}
          onBackdropPress={this.toggleModal}
        >
          <View style={{ flex: 2 / 3 }}>
            <Text>{this.state.connectionUsername}</Text>
            <ListImage
              rUserLoveNumber={this.state.connectionUserLoveNumber}
              rProfilePicture={this.state.connectionProfilePicture}
            />
            <Text>Love Number: {this.state.connectionUserLoveNumber}</Text>
          </View>
        </Modal> */}
      </KeyboardAvoidingView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddConnectionScreen);
