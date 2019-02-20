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
  TextInput
} from "react-native";

import { RkButton, RkPicker } from "react-native-ui-kitten";
import DatePicker from "react-native-datepicker";
import { MonoText } from "../components/StyledText";
import { connect } from "react-redux";
import { setUserName, setBirthDate } from "../redux/app-redux";
import { ImageBackground } from "react-native";

mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    rBirthDate: state.rBirthDate
  };
};

mapDispatchToProps = dispatch => {
  return {
    setBirthDate: bd => {
      dispatch(setBirthDate(bd));
    }
  };
};

class BirthDateScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser,
      birthdate: this.props.rBirthDate
    };
  }

  onSetBirthdateHandler = () => {
    this.props.setBirthDate(this.state.birthdate);
    this.props.navigation.navigate("ProfileNav");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upView}>
          <Image
            source={
              __DEV__
                ? require("../assets/images/headLogo.png")
                : require("../assets/images/headLogo.png")
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.MidView}>
          <Text style={styles.getStartedText}>Select Your Birthdate</Text>
          <DatePicker
            style={{
              width: "70%",
              paddingBottom: 20,

              alignSelf: "center"
            }}
            date={this.state.date}
            mode="date"
            placeholder={this.state.birthdate}
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
                fontSize: 18,
                fontStyle: "bold"
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              this.setState({ birthdate: date });
            }}
          />

          <Button
            style={styles.button}
            title="Submit"
            onPress={this.onSetBirthdateHandler}
          />
        </View>
        <View style={styles.downView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderWidth: 2,

    padding: 20,
    // backgroundColor: "#ECF0F5",
    fontSize: 20
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    fontStyle: "italic",
    paddingBottom: 10
  },
  upView: {
    // backgroundColor: "red",
    justifyContent: "center",
    flex: 1 / 3
  },
  downView: {
    // backgroundColor: "brown",
    justifyContent: "space-between",
    flex: 1 / 3
  },
  MidView: {
    // backgroundColor: "orange",
    justifyContent: "center",
    flex: 1 / 3
  },
  button: {
    borderWidth: 2,
    paddingTop: 50,

    paddingLeft: 10,
    paddingBottom: 10
  },
  welcomeImage: {
    width: "70%",
    height: "35%",
    resizeMode: "contain",
    alignSelf: "center"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthDateScreen);
