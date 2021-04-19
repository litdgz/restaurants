import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const InfoUser = ({ user }) => {
  console.log(user);
  return (
    <View style={styles.container}>
      <Avatar rounded={true} size="large" />
    </View>
  );
};

export default InfoUser;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    paddingVertical: 30,
  },
});
