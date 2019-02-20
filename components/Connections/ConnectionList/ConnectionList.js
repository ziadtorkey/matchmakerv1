import React, { Component } from "react";
import { connect } from "react-redux";
import { RkStyleSheet, RkText } from "react-native-ui-kitten";
import SingleConnection from "../SingleConnection/SingleConnection";

mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    userConnections: state.userConnections,
    userLoveNumber: state.userLoveNumber
  };
};

extractItemKey = item => `${item.withUser.id}`;

onItemPressed = item => {
  const navigationParams = { userId: item.withUser.id };
  this.props.navigation.navigate("Chat", navigationParams);
};

renderSeparator = () => <View style={styles.separator} />;

renderEmpty = () => (
  <RkText rkType="awesome">No Connections, Connect to new people.</RkText>
);

renderItem = ({ userConnectionData }) => {
  return <SingleConnection userDate={userConnectionData} />;
};

class ConnectionList extends Component {
  state = {
    data: {
      original: data.getChatList(),
      filtered: data.getChatList()
    }
  };
  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data.filtered}
        extraData={this.state}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={this.extractItemKey}
        renderItem={this.renderItem}
        ListEmptyComponent={this.renderEmpty}
      />
    );
  }
}
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

export default connect(
  mapStateToProps,
  null
)(ConnectionList);
