import React from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Picker,
  ActivityIndicator
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import * as firebase from "firebase";
import DatePicker from "react-native-datepicker";
import styles from "../../Styles/authStyles";
import { connect } from "react-redux";
import { setNewUser } from "../../redux/app-redux";
import numberCalculator from "../../functions/numberCalculator";
import "firebase/firestore";
import CurrentDateTime from "../../functions/CurrentDateTime";
// const admin = require("firebase-admin");
// const functions = require("firebase-functions");

// admin.initializeApp(functions.config().firebase);

// var db = admin.firestore();

mapStateToProps = state => {
  return {
    rUserid: "",
    rUsername: state.username,
    rEmail: state.email,
    rBirthDate: state.birthdate,
    rGender: state.gender,
    rRefreshtoken: state.refreshtoken
  };
};

mapDispatchToProps = dispatch => {
  return {
    setNewUser: (
      rUserid,
      rUsername,
      rBirthDate,
      rEmail,
      rGender,
      rRefreshtoken
    ) => {
      dispatch(
        setNewUser(
          rUserid,
          rUsername,
          rBirthDate,
          rEmail,
          rGender,
          rRefreshtoken
        )
      );
    }
  };
};

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Ziad Torkey",
      email: "test1@test.com",
      password: "0106686551",
      passwordConfirm: "0106686551",
      birthdate: "",
      gender: "Male",
      refreshtoken: "",
      isLoading: false
    };
  }

  getlovenumber = birthdate => {
    return numberCalculator(birthdate);
  };

  writeUserData = (
    userId,
    username,
    userLoveNumber,
    birthDate,
    email,
    gender,
    refreshToken
  ) => {
    // firebase
    //   .database()
    //   .ref("users/" + userId)
    //   .set({
    //     username: username,
    //     userLoveNumber: userLoveNumber,
    //     birthDate: birthDate,
    //     email: email,
    //     gender: gender,
    //     refreshToken: refreshToken,
    //     profile_picture: ""
    //   });
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .set({
        userid: userId,
        username: username,
        userLoveNumber: userLoveNumber,
        birthDate: birthDate,
        email: email,
        gender: gender,
        refreshToken: refreshToken,
        profile_picture: "",
        createdOn: CurrentDateTime()
      })
      .catch(error => {
        alert(error);
      });
  };

  onSignupPress = () => {
    let uid = "";
    let refreshToken = "";
    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.passwordConfirm === "" ||
      this.state.birthdate === "" ||
      this.state.gender === ""
    ) {
      Alert.alert("Please fill all fields");
      //console.log(this.state);
    } else if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert("Passwords do not match");
      return;
    }
    this.setState({ isLoading: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function success(userCredential) {
        var userData = userCredential.user;
        uid = userData.uid;
        refreshToken = userData.refreshToken;
        // console.log("The User Data: " + userData);
        // console.log("the user ID is: " + uid);
        if (!userData.refreshToken) {
          alert("Authentication failed, please try again!");
        } else {
          () => {
            this.props.setNewUser(
              uid,
              this.state.username,
              this.state.birthdate,
              this.state.email,
              this.state.gender,
              userData.refreshToken
            );
          };
        }
      })
      .then(
        () => {
          this.writeUserData(
            uid,
            this.state.username,
            this.getlovenumber(this.state.birthdate),
            this.state.birthdate,
            this.state.email,
            this.state.gender,
            refreshToken
          );
        },
        error => {
          Alert.alert(error.message);
        }
      );
  };

  onBackToLoginPress = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    let submitButton = (
      <View>
        <Button
          style={styles.button}
          title="Sign Up"
          onPress={this.onSignupPress}
        />
        <Button
          style={styles.button}
          title="Back to Login"
          onPress={this.onBackToLoginPress}
        />
      </View>
    );
    if (this.state.isLoading) {
      submitButton = <ActivityIndicator />;
    }
    return (
      <KeyboardAvoidingView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        behavior="padding"
      >
        <View style={styles.viewtop}>
          <Text style={styles.screenname}>Signup</Text>
        </View>
        <View style={styles.viewmid}>
          <TextInput
            style={styles.textinput}
            value={this.state.username}
            onChangeText={text => {
              this.setState({ username: text });
            }}
            placeholder="UserName"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.textinput}
            value={this.state.email}
            onChangeText={text => {
              this.setState({ email: text });
            }}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            style={styles.textinput}
            value={this.state.password}
            onChangeText={text => {
              this.setState({ password: text });
            }}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            style={styles.textinput}
            value={this.state.passwordConfirm}
            onChangeText={text => {
              this.setState({ passwordConfirm: text });
            }}
            placeholder="Password (confirm)"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <DatePicker
            style={{
              width: "70%",

              alignSelf: "center"
            }}
            date={this.state.birthdate}
            mode="date"
            placeholder="BirthDate"
            format="YYYY-MM-DD"
            minDate="1960-05-01"
            maxDate="2010-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",

                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 40,
                borderRadius: 10,
                backgroundColor: "#fff"
              },
              dateText: {
                fontSize: 18
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              this.setState({ birthdate: date });
            }}
          />
          <Picker
            selectedValue={this.state.gender}
            style={{ height: 50, width: 150, alignSelf: "center" }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ gender: itemValue })
            }
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>

          {submitButton}
        </View>
        <View style={styles.viewbottom} />
      </KeyboardAvoidingView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen);
