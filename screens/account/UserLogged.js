import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";

import { closeSession, getCurrentUser } from "../../utils/actions";
import Loading from "../../components/Loading";
import InfoUser from "../../components/account/InfoUser";
import AccountOptions from "../../components/account/AccountOptions";

const UserLogged = () => {
  const toastRef = useRef();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <View style={styles.container}>
      {user && (
        <View>
          <InfoUser
            user={user}
            setLoading={setLoading}
            setLoadingText={setLoadingText}
          />
          <AccountOptions 
          user={user}
          toastRef={toastRef}
          />
        </View>
      )}

      <Button
        buttonStyle={styles.btnClosedSesssion}
        titleStyle={styles.btnClosedSesssionTitle}
        title="Cerrar Sesion"
        onPress={() => {
          closeSession();
          navigation.navigate("restaurants");
        }}
      />

      <Toast ref={toastRef} opacity={0.9} />
      <Loading isVisible={loading} text={loadingText} />
    </View>
  );
};

export default UserLogged;

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "#f9f9f9",
  },
  btnClosedSesssion: {
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e21e15",
    borderBottomWidth: 1,
    borderBottomColor: "#e21e15",
    paddingVertical: 10,
  },
  btnClosedSesssionTitle: {
    color: "#e21e15",
  },
});
