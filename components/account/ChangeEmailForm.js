import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { isEmpty } from "lodash";

import { updateProfile } from "../../utils/actions";
import { validateEmail } from "../../utils/helpers";

const ChangeEmailForm = ({ email, setShowModal, toastRef, setReloadUser }) => {
  const [newEmail, setNewEmail] = useState(email);
  const [password, setPassword] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!validateForm()) {
      return;

      console.log("cambio");
    }

    //   setLoading(true);
    //   const result = await updateProfile({ displayName: newDisplayName });
    //   setLoading(false);

    //   if (!result.statusResponse) {
    //     setError("Error al actualizar nombres y apellidos, intenta mas tarde.");
    //     return;
    //   }
    //   setReloadUser(true);
    //   toastRef.current.show("Se han actualizado nombres y apellidos.", 3000);
    //   setShowModal(false);

    console.log("cambio");
  };

  const validateForm = () => {
    setErrorEmail(null);
    setErrorPassword(null);

    console.log(newEmail);

    let isValid = true;

    if (!validateEmail(newEmail)) {
      setErrorEmail("Debes ingresar un email valido.");
      isValid = false;
    }

    if (newEmail === email) {
      setErrorEmail("Debes ingresar un email diferente al actual.");
      isValid = false;
    }

    if (isEmpty(password)) {
      setErrorPassword("Debes ingresar tu contrasenia.");
      isValid = false;
    }

    return isValid;
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Ingresa el nuevo email..."
        containerStyle={styles.input}
        defaultValue={email}
        onChange={(e) => setNewEmail(e.nativeEvent.text)}
        keyboardType="email-address"
        errorMessage={errorEmail}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#c2c2c2",
        }}
      />

      <Input
        placeholder="Ingresa tu contrasenia..."
        containerStyle={styles.input}
        defaultValue={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        errorMessage={errorPassword}
        password={true}
        secureTextEntry={!showPassword}
        rightIcon={
          <Icon
            type="material-community"
            name={!showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={{ color: "c2c2c2" }}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Cambiar Email"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={onSubmit}
        loading={loading}
      />
    </View>
  );
};

export default ChangeEmailForm;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingVertical: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnContainer: {
    width: "95%",
  },
  btn: {
    backgroundColor: "#e21e15",
  },
});
