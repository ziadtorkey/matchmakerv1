import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { connect } from "react-redux";
import NumberOne from "./NumbersScreens/one";

mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    rBirthDate: state.rBirthDate,
    userLoveNumber: state.userLoveNumber
  };
};

class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Everything about Your Number "
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <NumberOne />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff"
  }
});

export default connect(
  mapStateToProps,
  null
)(LinksScreen);
