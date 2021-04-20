import { map } from "lodash";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, ListItem } from "react-native-elements";

const AccountOptions = ({ user, toastRef }) => {
  const menuOptions = generateOptions();

  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} style={styles.menuItem}>
          <Icon
            type="material-community"
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type="material-community"
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
    </View>
  );
};

function generateOptions() {
  return [
    {
      title: "Cambiar Nombres y Apellidos",
      iconNameLeft: "account-circle",
      iconColorLeft: "#e21e15",
      iconNameRight: "chevron-right",
      iconColorRight: "#e21e15",
    },
    {
      title: "Cambiar Email",
      iconNameLeft: "at",
      iconColorLeft: "#e21e15",
      iconNameRight: "chevron-right",
      iconColorRight: "#e21e15",
    },
    {
      title: "Cambiar Contrasenia",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#e21e15",
      iconNameRight: "chevron-right",
      iconColorRight: "#e21e15",
    },
  ];
}

export default AccountOptions;

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e21e15",
  },
});
