import { StyleSheet } from "react-native";
import { Platform } from "react-native";
export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch"
    // backgroundColor: "black"
  },
  screenname: {
    fontSize: 22,
    // color: "black",
    lineHeight: 24,
    textAlign: "center"
  },
  viewmid: {
    flex: 4 / 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    alignSelf: "center",
    // backgroundColor: "red",
    width: "90%",
    paddingTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  },
  viewtop: {
    flex: 1 / 10,
    flexDirection: "column",
    //  backgroundColor: "yellow",
    justifyContent: "space-around"
  },
  listContainer: {
    width: "100%"
  },
  viewbottom: {
    flex: 5 / 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "green",
    alignItems: "center",
    marginTop: 5,
    paddingTop: 10
  },
  textinput: {
    width: "90%",
    alignSelf: "center",
    paddingBottom: 10,
    height: 40,
    paddingLeft: 6
  },
  picker: {
    width: "70%",
    alignSelf: "center",
    //backgroundColor: "white",
    borderRadius: 5
  },
  button: {
    backgroundColor: "red",
    alignSelf: "center"
  },
  contentContainer: {
    paddingTop: 0,
    paddingBottom: 30
  },
  imageContainer: {
    //backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    //margin: 5
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  detailsContainer: {
    //backgroundColor: "green",
    justifyContent: "center",
    alignItems: "flex-start",
    //margin: 5
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  detailsText: {
    justifyContent: "flex-start",
    paddingBottom: 5
  },
  profileImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    // marginTop: 3,
    // marginLeft: -10,
    borderRadius: 120 / 2
  },
  badgecontainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "normal"
  },
  badgeCount: {
    fontSize: 18,
    fontWeight: "bold"
  }
}));
