import React, { Component } from "react";
import { View, Text } from "react-native";

class ConnectionProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionUserid: this.props.navigation.getParam("userid", "")
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default ConnectionProfileScreen;
