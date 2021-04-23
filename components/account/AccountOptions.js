import { map } from "lodash";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon, ListItem } from "react-native-elements";

import Modal from "../Modal";
import ChangeDisplayNameForm from "./ChangeDisplayNameForm";
import ChangeEmailForm from './ChangeEmailForm';

const AccountOptions = ({ user, toastRef, setReloadUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const selectedComponent = (key) => {
    switch (key) {
      case "displayName":
        setRenderComponent(
          <ChangeDisplayNameForm
            displayName={user.displayName}
            setShowModal={setShowModal}
            toastRef={toastRef}
            setReloadUser={setReloadUser}
          />
        );

        break;

      case "email":
        setRenderComponent(
          <ChangeEmailForm 
          email={user.email}
            setShowModal={setShowModal}
            toastRef={toastRef}
            setReloadUser={setReloadUser}
          />
        );

        break;

      case "password":
        setRenderComponent(<Text>password</Text>);

        break;
    }
    setShowModal(true);
  };

  const generateOptions = () => {
    return [
      {
        title: "Cambiar Nombres y Apellidos",
        iconNameLeft: "account-circle",
        iconColorLeft: "#e21e15",
        iconNameRight: "chevron-right",
        iconColorRight: "#e21e15",
        onPress: () => selectedComponent("displayName"),
      },
      {
        title: "Cambiar Email",
        iconNameLeft: "at",
        iconColorLeft: "#e21e15",
        iconNameRight: "chevron-right",
        iconColorRight: "#e21e15",
        onPress: () => selectedComponent("email"),
      },
      {
        title: "Cambiar Contrasenia",
        iconNameLeft: "lock-reset",
        iconColorLeft: "#e21e15",
        iconNameRight: "chevron-right",
        iconColorRight: "#e21e15",
        onPress: () => selectedComponent("password"),
      },
    ];
  };

  const menuOptions = generateOptions();

  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} style={styles.menuItem} onPress={menu.onPress}>
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
      <Modal isVisible={showModal} setVisible={setShowModal}>
        {renderComponent}
      </Modal>
    </View>
  );
};

export default AccountOptions;

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e21e15",
  },
});
