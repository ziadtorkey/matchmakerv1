import React from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import * as firebase from "firebase";
import styles from "../../Styles/authStyles";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
  }

  onLoginPress = () => {
    this.setState({ isLoading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          this.setState({ isLoading: false });
        },
        error => {
          Alert.alert(error.message);
        }
      )
      .then(() => {
        this.setState({ isLoading: false });
      });
  };

  onCreateAccountPress = () => {
    var navActions = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Signup" })]
    });
    this.props.navigation.dispatch(navActions);
  };

  onForgotPasswordPress = () => {
    var navActions = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "ForgotPassword" })]
    });
    this.props.navigation.dispatch(navActions);
  };

  render() {
    let submitButton = <Button title="Login" onPress={this.onLoginPress} />;
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
          <Text style={styles.screenname}>Login</Text>
        </View>

        <View style={styles.viewmid}>
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

          {submitButton}
          <Button
            title="Create account..."
            onPress={this.onCreateAccountPress}
          />
          <Button
            title="Forgot Password..."
            onPress={this.onForgotPasswordPress}
          />
        </View>
        <View sytle={styles.viewbottom} />
      </KeyboardAvoidingView>
    );
  }
}
