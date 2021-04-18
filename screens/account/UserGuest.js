import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from '@react-navigation/native'

const UserGuest = () => {
  const navigation = useNavigation()
  return (
    <ScrollView centerContent style={styles.viewBody}>
      <Image
        source={require("../../assets/1855081.png")}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
      <Text style={styles.description}>
        Como describirias tu mejor restaurant? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado mas y
        comenta como ha sido tu experiencia.
      </Text>
      <Button
        buttonStyle={styles.button}
        title="Ver tu Perfil"
        onPress={() => navigation.navigate("login")}
      />
    </ScrollView>
  );
};

export default UserGuest;

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginVertical: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "justify",
    marginBottom: 20,
    color: "#690b04",
  },
  button: {
    backgroundColor: "#e21e15",
  },
});
