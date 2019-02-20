import { StyleSheet } from "react-native";
export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    // backgroundColor: "black",
    alignItems: "center"
  },
  screenname: {
    fontSize: 22,
    // color: "black",
    lineHeight: 24,
    textAlign: "center"
  },
  viewmid: {
    flex: 4 / 6,
    flexDirection: "column",
    justifyContent: "space-evenly",
    // backgroundColor: "red",
    width: "80%"
  },
  viewtop: {
    flex: 1 / 6,
    // backgroundColor: "yellow",
    justifyContent: "center"
  },
  viewbottom: {
    flex: 1 / 6
    // backgroundColor: "green"
  },
  textinput: {
    width: "70%",
    alignSelf: "center",
    // backgroundColor: "white",
    borderRadius: 5
  },
  picker: {
    width: "70%",
    alignSelf: "center",
    //backgroundColor: "white",
    borderRadius: 5
  },
  button: {
    width: "80%",
    alignSelf: "center"
  },
  contentContainer: {
    paddingTop: 0,
    paddingBottom: 30
  }
}));
