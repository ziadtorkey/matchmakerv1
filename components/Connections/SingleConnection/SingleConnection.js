import React, { Component } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import _ from "lodash";
import { RkStyleSheet, RkText, RkTextInput } from "react-native-ui-kitten";
import { connect } from "react-redux";

//Replace Item with Props
const SingleConnection = props => {
  return (
    <TouchableOpacity onPress={() => this.onItemPressed(item)}>
      <View style={styles.container}>
        <Avatar
          rkType="circle"
          style={styles.avatar}
          img={item.withUser.photo}
        />
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <RkText rkType="header5">{`${item.withUser.firstName} ${
              item.withUser.lastName
            }`}</RkText>
            <RkText rkType="secondary4 hintColor">
              {moment()
                .add(last.time, "seconds")
                .format("LT")}
            </RkText>
          </View>
          <RkText
            numberOfLines={2}
            rkType="primary3 mediumLine"
            style={{ paddingTop: 5 }}
          >
            {last.text}
          </RkText>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  searchContainer: {
    backgroundColor: theme.colors.screen.bold,
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 60,
    alignItems: "center"
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingBottom: 12,
    paddingTop: 7,
    flexDirection: "row"
  },
  content: {
    marginLeft: 16,
    flex: 1
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.border.base
  }
}));
export default SingleConnection;
