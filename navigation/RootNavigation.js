import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "./../screens/auth/LoginScreen";
import SignupScreen from "./../screens/auth/SignupScreen";
import ForgotPasswordScreen from "./../screens/auth/ForgotPasswordScreen";

export default createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: LoginScreen,
    Signup: SignupScreen,
    ForgotPassword: ForgotPasswordScreen,
    Main: MainTabNavigator
  })
);
