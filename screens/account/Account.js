import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";
import { getCurrentUser, isUserLogged } from "../../utils/actions";
import Loading from "../../components/Loading";
import { useFocusEffect } from "@react-navigation/native";

import UserLogged from "./UserLogged";
import UserGuest from "./UserGuest";
const Account = () => {
  const [login, setLogin] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const user = getCurrentUser();
      user ? setLogin(true) : setLogin(false);
    }, [])
  );

  if (login == null) {
    return <Loading isVisible={true} text="Cargando.." />;
  }
  return login ? <UserLogged /> : <UserGuest />;
};

export default Account;

const styles = StyleSheet.create({});
