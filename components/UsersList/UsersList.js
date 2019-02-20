import React from "react";
import { Text, View, FlatList } from "react-native";
import User from "./User/User";

const UsersList = props => (
  <FlatList
    style={styles.listContainer}
    data={props.users}
    renderItem={user => (
      <User
        rUserLoveNumber={user.rUserLoveNumber}
        rProfilePicture={user.rProfilePicture}
        rUsername={user.rUsername}
        rGender={user.rGender}
        onUserPressed={() => props.onUserPressed(info.item.key)}
      />
    )}
  />
);

export default UsersList;
