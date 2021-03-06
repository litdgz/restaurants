import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import LoginForm from "../../components/account/LoginForm";

const Login = () => {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../assets/1855081.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.container}>
        <LoginForm />
        <CreateAcount />
      </View>
      <Divider style={styles.divider} />
    </KeyboardAwareScrollView>
  );
};

const CreateAcount = (props) => {
  const navigation = useNavigation();
  return (
    <Text
      style={styles.register}
      onPress={() => navigation.navigate("register")}
    >
      ?Aun no tienes una cuenta?{" "}
      <Text style={styles.btnRegister}>Registrate</Text>
    </Text>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: "100%",
    marginBottom: 20,
  },
  container: {
    marginHorizontal: 40,
  },
  divider: {
    backgroundColor: "#e21e15",
    margin: 40,
  },
  register: {
    marginTop: 15,
    marginHorizontal: 10,
    alignSelf: "center",
  },
  btnRegister: {
    color: "#e21e15",
    fontWeight: "bold",
  },
});
