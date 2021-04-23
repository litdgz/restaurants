import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";

import { validateEmail } from "../../utils/helpers";
import { registerUser } from "../../utils/actions";
import Loading from "../Loading";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValues());
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const [loading, setloading] = useState(false);

  const navigation = useNavigation();

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const doRegisterUser = async () => {
    if (!validateData()) {
      return;
    }

    setloading(true);
    const result = await registerUser(formData.email, formData.password);
    setloading(false);

    if (!result.statusResponse) {
      setErrorEmail(result.error);
      return;
    }

    navigation.navigate("account");
  };

  const validateData = () => {
    setErrorConfirm("");
    setErrorEmail("");
    setErrorPassword("");
    let isValid = true;

    if (!validateEmail(formData.email)) {
      setErrorEmail("debes de ingresar un email valido.");
      isValid = false;
    }
    if (size(formData.password) < 6) {
      setErrorPassword(
        "Debes ingresar una contrasenia de almenos seis caracteres"
      );
      isValid = false;
    }

    if (size(formData.confirm) < 6) {
      setErrorConfirm(
        "Debes ingresar una confimacion de contrasenia de almenos seis caracteres"
      );
      isValid = false;
    }

    if (formData.password !== formData.confirm) {
      setErrorPassword("la contrasenia y la confimacion no son iguales");
      setErrorConfirm("la contrasenia y la confimacion no son iguales");
      isValid = false;
    }

    return isValid;
  };

  return (
    <View style={styles.form}>
      <Input
        containerStyle={styles.input}
        placeholder="Email"
        onChange={(e) => onChange(e, "email")}
        keyboardType="email-address"
        errorMessage={errorEmail}
        defaultValue={formData.email}
      />

      <Input
        containerStyle={styles.input}
        placeholder="Password"
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e) => onChange(e, "password")}
        errorMessage={errorPassword}
        defaultValue={formData.password}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />

      <Input
        containerStyle={styles.input}
        placeholder="Confirm your Password"
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e) => onChange(e, "confirm")}
        errorMessage={errorConfirm}
        defaultValue={formData.confirm}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />

      <Button
        title="Register New User"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => doRegisterUser()}
      />
      <Loading isVisible={loading} text="Creando Cuenta.." />
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
  input: {
    width: "100%",
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#e21e15",
  },
  icon: {
    color: "#c1c1c1",
  },
});

const defaultFormValues = () => {
  return { email: "", password: "", confirm: "" };
};
